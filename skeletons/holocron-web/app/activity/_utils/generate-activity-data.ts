import { ChartSection } from "@/app/_components/chart-grid/chart-grid";
import { SummarySection } from "@/app/_components/summary-grid/interfaces";
import { ERROR_FETCHING_DATA, LOADING } from "@/app/_constants/constants";
import { AggregateQueryData } from "@/app/_typings/api-responses/aggregate";
import { formatChartLabel } from "@/app/_utils/date-time";


const getSummaryValue = (
  key: keyof AggregateQueryData["totalsOfActivity2"],
  totalActivity: AggregateQueryData["totalsOfActivity2"] | null,
  isLoading: boolean
): number | string => {
  if (isLoading) {
    return LOADING;
  }
  if (!totalActivity || (!totalActivity[key] && totalActivity[key] !== 0)) {
    return ERROR_FETCHING_DATA;
  }
  return totalActivity[key];
}
export const generateSummarySections = (
  totalActivity: AggregateQueryData["totalsOfActivity2"] | null,
  isLoading = false
): SummarySection[] => {
  return [
    {
      id: "downloads",
      title: "Downloads",
      data: {
        value: getSummaryValue('songdownloads', totalActivity, isLoading),
      }
    },
    {
      id: "plays",
      title: "Plays",
      data: {
        value: getSummaryValue('songplaysum', totalActivity, isLoading),
      }
    },
    {
      id: "ratio",
      title: "Play to download ratio",
      tooltip: "Play to download ratio tooltip",
      data: {
        value: getSummaryValue('ratio', totalActivity, isLoading),
      },
    },
    {
      id: "saved",
      title: "Saved",
      tooltip: "Saved songs and sfx tooltip",
      data: {
        value: getSummaryValue('songsavedtoplaylist', totalActivity, isLoading), // songsavedtoplaylist, sfxsavedtoplaylist?
      },
    },
    {
      id: "playlists-created",
      title: "Playlists created",
      data: {
        value: getSummaryValue('playlistscreated', totalActivity, isLoading),
      },
    },
    {
      id: "projects-created",
      title: "Projects created",
      data: {
        value: getSummaryValue('projectscreated', totalActivity, isLoading),
      },
    },
  ];
}

export const generateChartSections = (
  data: {
    activityBreakdown: AggregateQueryData["fullBreakdownByActivitySeries"] | null,
    platformDistribution: AggregateQueryData["platformDistribution"] | null,
    totalActivity: AggregateQueryData["totalsOfActivity2"] | null,
  } | null,
  isLoading = false
): ChartSection[] => {
  const { activityBreakdown, platformDistribution, totalActivity } = data || {};
  if (!isLoading && (!activityBreakdown || !platformDistribution || !totalActivity)) {
    return [];
  }
  const labels = (activityBreakdown?.event_date || []).map(formatChartLabel);
  const musicSfxDataTitles = {
    music: "Music",
    sfx: "SFX",
  };

  return [
    {
      id: 'plays',
      title: 'Plays',
      tooltip: 'Plays tooltip',

      type: 'line',

      dataTitles: musicSfxDataTitles,
      data: {
        music: activityBreakdown?.num_play_song || [],
        sfx: activityBreakdown?.num_play_sfx || [],
      },
      labels,
      summaryValue: totalActivity ? (totalActivity.songplaysum + totalActivity.sfxplaysum) : LOADING,
    },
    {
      id: 'downloads',
      title: 'Downloads',
      tooltip: 'Downloads tooltip',

      type: 'line',

      dataTitles: musicSfxDataTitles,
      data: {
        music: activityBreakdown?.num_download_song || [],
        sfx: activityBreakdown?.num_download_sfx || [],
      },
      labels,
      summaryValue: totalActivity ? (totalActivity.songdownloads + totalActivity.sfxdownloads) : LOADING,
    },
    {
      id: 'play-to-download-ratio',
      title: 'Play to download ratio',
      tooltip: 'Play to download ratio tooltip',

      type: 'line',

      dataTitles: {
        music: 'Music',
      },
      data: {
        music: activityBreakdown?.total_activity || [], // ? which value should we use?
      },
      labels,
      summaryValue: totalActivity ? totalActivity.ratio : LOADING,
    },
    {
      id: 'saves',
      title: 'Saved',
      tooltip: 'Saved tooltip',

      type: 'line',

      dataTitles: musicSfxDataTitles,
      data: {
        music: activityBreakdown?.num_playlist_added_song || [],
        sfx: activityBreakdown?.num_playlist_added_sfx || [],
      },
      labels,
      summaryValue: totalActivity ? totalActivity.songsavedtoplaylist + totalActivity.sfxsavedtoplaylist : LOADING,
    },
    {
      id: 'active-sessions-per-client',
      title: 'Active sessions per client',

      type: 'pie',

      dataTitles: {
        plugin: 'Plugin',
        mobile: 'App',
        web: 'Desktop',
      },
      data: Object.entries(platformDistribution || []).reduce((acc, [platform, value]) => {
        acc[platform] = [value];
        return acc;
      }, {} as Record<string, number[]>),
    },
  ];
}