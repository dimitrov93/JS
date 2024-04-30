import { Suspense } from "react";
import { TimeFrame } from "../_typings/enums/time-frame";
import styles from "./activity.module.css";
import ActivityDataContainer from "./_components/activity-data-container";
import ActivityDataContainerLoader from "./_components/activity-data-container-loader";
import { ACCOUNT_ID } from "../_constants/constants";
import TimeFiltersContainer from "../_components/time-filters-container/time-filters";

const Activity = async ({
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
        fallback={<ActivityDataContainerLoader timeFrame={timeFrameValue} />}
      >
        <ActivityDataContainer
          timeFrame={timeFrameValue}
          accountId={accountId}
        />
      </Suspense>
    </div>
  );
};

export default Activity;
