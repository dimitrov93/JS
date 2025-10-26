"use client";

import { Icon, Text } from "@epidemicsound/design-system";

import styles from "./most-downloaded.module.css";
import { useMemo, useState } from "react";
import Pager, { PAGE_SIZE } from "@/app/_components/pager/pager";
import { AudioEngineProvider } from "@/app/_contexts/audio-engine";
import Player from "@/app/_components/player/player";
import dynamic from "next/dynamic";
import { LOADING, NO_DATA } from "@/app/_constants/constants";


const MostDownloadedHeader = () => <div className={styles.header}>
  <div className="texts">
    <Text.h1 variant="textXL" className={styles.title}>
      Most downloaded tracks and artists
    </Text.h1>
    <Text.h2 variant="textS" className={styles.subtitle}>
      describe that it&apos;s for the org
    </Text.h2>
  </div>
  <div className={styles.header}></div>
</div>;

export interface MostDownloadedProps {
  trackDataList: {
    track_id: number;
    popularity_score: number;
    track: string | null;
    waveform: number[] | null;
  }[];
}
const MostDownloaded = ({ trackDataList: trackData }: MostDownloadedProps) => {
  const [page, setPage] = useState(1);
  const currentPageTracks = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return trackData.slice(start, end);
  }, [page, trackData]);

  const pages = useMemo(() => {
    const pageCount = Math.ceil(trackData.length / PAGE_SIZE);
    return new Array(pageCount).fill(0).map((_, ix) => ix + 1);
  }, [trackData]);

  return (
    <div className={styles.container}>
      <MostDownloadedHeader />
      <div className={styles.tracks}>
        {(currentPageTracks || []).map((trackData) => (
          <div className={styles.trackContainer} key={trackData.track_id}>
            <div className={styles.trackPopularity} suppressHydrationWarning>
              <Icon.Flame color="primary" /> {trackData.popularity_score}
            </div>
            <AudioEngineProvider>
              <Player track={trackData.track} waveform={trackData.waveform} />
            </AudioEngineProvider>
          </div>
        ))}
        {!currentPageTracks.length && <div className={styles.noData}>{NO_DATA}</div>}
      </div>

      <Pager page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export const MostDownloadedLoader = () => {
  const dummyTrackRows = new Array(5).fill(null).map((_, ix) => ix);
  return (
    <div className={styles.container}>
      <MostDownloadedHeader />
      <div className={styles.tracks}>
        {(dummyTrackRows).map(ix => (
          <div className={styles.trackContainer + ' ' + 'loader'} key={`track-loader-${ix}`}>
            <div className={styles.trackPopularity} suppressHydrationWarning>
              <Icon.Flame color="primary" />
            </div>
            {LOADING}
          </div>
        ))}
      </div>

      <Pager page={1} pages={[1]} setPage={() => { }} />
    </div>
  );
};

export default dynamic(() => Promise.resolve(MostDownloaded), { ssr: false, loading: MostDownloadedLoader });
