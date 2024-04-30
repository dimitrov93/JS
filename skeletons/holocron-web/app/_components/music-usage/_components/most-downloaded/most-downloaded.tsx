"use client";

import { Icon, Text } from "@epidemicsound/design-system";

import styles from "./most-downloaded.module.css";
import Player from "@/app/_components/player/player";
import { useMemo, useState } from "react";
import Pager, { PAGE_SIZE } from "@/app/_components/pager/pager";

interface MostDownloadedProps {
  trackList: any[];
  popularityScores: number[];
}
const MostDownloaded = ({
  trackList,
  popularityScores,
}: MostDownloadedProps) => {
  const [page, setPage] = useState(1);
  const currentPageTracks = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return trackList.slice(start, end);
  }, [page, trackList]);
  const popularityOffset = useMemo(() => {
    return (page - 1) * PAGE_SIZE;
  }, [page]);
  const pages = useMemo(() => {
    const pageCount = Math.ceil(trackList.length / PAGE_SIZE);
    return new Array(pageCount).fill(0).map((_, ix) => ix + 1);
  }, [trackList]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className="texts">
          <Text.h1 variant="textXL" className={styles.title}>
            Most downloaded tracks and artists
          </Text.h1>
          <Text.h2 variant="textS" className={styles.subtitle}>
            describe that it&apos;s for the org
          </Text.h2>
        </div>
        <div className={styles.header}></div>
      </div>
      <div className={styles.tracks}>
        {(currentPageTracks || []).map((track, ix) => (
          <div className={styles.trackContainer} key={ix}>
            <div className={styles.trackPopularity}>
              <Icon.Flame color="primary" />{" "}
              {popularityScores[popularityOffset + ix]}
            </div>

            <Player className={styles.track} track={track} />
          </div>
        ))}
      </div>

      <Pager page={page} pages={pages} setPage={setPage} />
    </div>
  );
};

export default MostDownloaded;
