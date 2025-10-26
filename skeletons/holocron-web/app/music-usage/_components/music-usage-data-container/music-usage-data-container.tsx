import { PropsWithChildren } from "react";

import SummaryGrid from "@/app/_components/summary-grid/summary-grid";
import { ERROR_FETCHING_DATA } from "@/app/_constants/constants";
import { apiFetch } from "@/app/_utils/api-fetch";
import {
  TopEntity,
  TrackUsage,
} from "@/app/_typings/api-responses/track-usage";
import MostDownloaded, {
  MostDownloadedProps,
} from "../most-downloaded/most-downloaded";

import styles from "./music-usage-data-container.module.css";
import { Artist } from "@/app/_typings/api-responses/artist";
import Artists from "../most-downloaded/_components/artitsts";
import { SummarySection } from "@/app/_components/summary-grid/interfaces";

const extractTopEntityDataForKPI = (topEntityList: TopEntity[] | null) => {
  if (!topEntityList?.length) {
    return [];
  }
  const { totalDownloads, entitiesDownloadData } = topEntityList.reduce(
    (acc, entity) => {
      const { num_download, tag_value, display_name } = entity;
      if (!tag_value) {
        return acc;
      }
      acc.totalDownloads += num_download;
      acc.entitiesDownloadData.push({
        value: display_name || tag_value,
        downloads: num_download,
      });
      return acc;
    },
    { totalDownloads: 0, entitiesDownloadData: [] } as {
      totalDownloads: number;
      entitiesDownloadData: { value: string; downloads: number }[];
    }
  );

  return entitiesDownloadData.map((entity) => {
    const percentage = ((entity.downloads / totalDownloads) * 100).toFixed(0);
    return {
      value: `${percentage}%`,
      label: entity.value,
    };
  });
};

interface MusicUsageDataContainerProps {
  timeFrame: string;
  accountId: string;
  filters?: JSX.Element;
}
export default async function MusicUsageDataContainer(
  props: PropsWithChildren<MusicUsageDataContainerProps>
) {
  const { timeFrame, accountId, filters } = props;
  const queryParams = `accountId=${accountId}&timeframe=${timeFrame}`;
  const trackUsageQueryPromise = apiFetch<TrackUsage>(
    `/track-usage/dashboard?${queryParams}`
  );

  const trackUsageQueryResult = await trackUsageQueryPromise;

  const trackUsageData = trackUsageQueryResult.ok
    ? trackUsageQueryResult.data
    : null;

  const trackIds = trackUsageData
    ? trackUsageData.rankings.topTracks.map(({ track_id }) => ({
        track_id: track_id!,
      }))
    : [];

  const trackDataPromises = trackIds.map(
    ({ track_id }) =>
      apiFetch<any>(`https://www.epidemicsound.com/json/tracks/${track_id}/`),
    {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }
  );
  const waveformDataPromises = trackIds.map(({ track_id }) =>
    apiFetch<any>(
      `https://audiocdn.epidemicsound.com/waveforms/1600/${track_id}.json`,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    )
  );
  const artistPromises = (trackUsageData?.rankings.topArtists || []).map(
    ({ tag_value }) =>
      apiFetch<Artist>(
        `https://www.epidemicsound.com/json/artists/${tag_value}/`,
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      )
  );

  const allDataQueryResults = await Promise.all([
    ...trackDataPromises,
    ...waveformDataPromises,
    ...artistPromises,
  ]);
  const trackDataQueriesResults = allDataQueryResults.slice(0, trackIds.length);
  const waveformDataQueriesResults = allDataQueryResults.slice(
    trackIds.length,
    trackIds.length * 2
  );
  const artistDataQueriesResults = allDataQueryResults.slice(
    trackIds.length * 2
  );

  const moodData = extractTopEntityDataForKPI(
    trackUsageData?.rankings?.topMoods || null
  );
  const genreData = extractTopEntityDataForKPI(
    trackUsageData?.rankings?.topGenres || null
  );

  const artists = artistDataQueriesResults
    .map(({ ok, data }) => (ok ? data : null))
    .filter(Boolean) as Artist[];

  const sections: SummarySection[] = [
    {
      id: "tracks-downloaded",
      title: "Tracks downloaded",
      data: {
        value: trackUsageData
          ? trackUsageData.musicDownloadsAndPlays.songdownloads
          : ERROR_FETCHING_DATA,
      },
      gridSize: 6,
    },
    {
      id: "tracks-played",
      title: "Tracks played",
      data: {
        value: trackUsageData
          ? trackUsageData.musicDownloadsAndPlays.songplays
          : ERROR_FETCHING_DATA,
      },
      gridSize: 6,
    },
    {
      id: "top-genres",
      title: "Top genres",
      data: genreData,
      gridSize: 6,
    },
    // {
    //   id: "top-subgenres",
    //   title: "Top subgenres",
    //   data: genreData,
    // },
    {
      id: "top-moods",
      title: "Top moods",
      data: moodData,
      gridSize: 6,
    },
  ];

  const trackDataList = (trackUsageData?.rankings.topTracks || []).map(
    ({ track_id, popularity_score }, idx) => {
      const track = trackDataQueriesResults[idx]?.ok
        ? trackDataQueriesResults[idx].data
        : null;
      const waveform = waveformDataQueriesResults[idx]?.ok
        ? waveformDataQueriesResults[idx].data.data
        : null;
      return { track_id: track_id, popularity_score, track, waveform };
    }
  ) as MostDownloadedProps["trackDataList"];

  return (
    <div className={styles.container}>
      <SummaryGrid sections={sections} title="Summary" />
      <MostDownloaded trackDataList={trackDataList} />
      <Artists artists={artists} />
    </div>
  );
}
