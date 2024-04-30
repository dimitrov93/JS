import { Suspense } from "react";

import styles from "./music-usage.module.css";
import { TimeFrame } from "../_typings/enums/time-frame";
import MusicUsageDataContainer from "./_components/music-usage-data-container/music-usage-data-container";
import { ACCOUNT_ID } from "../_constants/constants";
import TimeFiltersContainer from "../_components/time-filters-container/time-filters";
import MusicUsageDataContainerLoader from "./_components/music-usage-data-container/music-usage-data-container-loader";

const MusicUsage = async ({
  searchParams,
}: {
  params: { slug: string };
  searchParams: { timeFrame: string; accountId: string };
}) => {
  const timeFrameValue = searchParams.timeFrame || TimeFrame.ThreeMonths;
  const accountId = searchParams.accountId || ACCOUNT_ID;

  return (
    <div className={styles.container}>
      <Suspense key={accountId}>
        <TimeFiltersContainer timeFrameValue={timeFrameValue} />
      </Suspense>
      <Suspense
        key={timeFrameValue}
        fallback={<MusicUsageDataContainerLoader />}
      >
        <MusicUsageDataContainer
          timeFrame={timeFrameValue}
          accountId={accountId}
        />
      </Suspense>
    </div>
  );
};

export default MusicUsage;
