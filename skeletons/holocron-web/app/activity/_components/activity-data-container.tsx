import { PropsWithChildren } from "react";

import SummaryGrid from "@/app/_components/summary-grid/summary-grid";

import styles from "./activity-data-container.module.css";
import { apiFetch } from "@/app/_utils/api-fetch";
import { AggregateQueryData } from "@/app/_typings/api-responses/aggregate";
import ChartGrid from "@/app/_components/chart-grid/chart-grid";
import { getTimeframeString } from "@/app/_utils/date-time";
import { TimeFrame } from "@/app/_typings/enums/time-frame";
import { generateChartSections, generateSummarySections } from "../_utils/generate-activity-data";
import ActivityDataTable from "./activity-table";

interface ActivityDataContainerProps {
  timeFrame: string;
  accountId: string;
}
const ActivityDataContainer = async (props: PropsWithChildren<ActivityDataContainerProps>) => {
  const { timeFrame, accountId } = props;

  const aggregationQueryPromise = apiFetch<AggregateQueryData>(
    `/aggregation/dashboard?accountId=${accountId}&timeframe=${timeFrame}`,
    {
      cache: 'no-cache',
    }
  );

  const aggregationQueryResult = await aggregationQueryPromise;


  const errorFetchingData = !aggregationQueryResult.ok;

  const totalActivity = !errorFetchingData ? aggregationQueryResult.data.totalsOfActivity2 : null;
  const activityBreakdown = !errorFetchingData ? aggregationQueryResult.data.fullBreakdownByActivitySeries : null;
  const platformDistribution = !errorFetchingData ? aggregationQueryResult.data.platformDistribution : null;

  const sections = generateSummarySections(totalActivity);
  const chartSections = generateChartSections({ totalActivity, platformDistribution, activityBreakdown });

  return (
    <div className={styles.container}>
      <SummaryGrid
        title={`Total activity ${getTimeframeString(timeFrame as TimeFrame)}`}
        sections={sections}
      />
      <div className={styles.chartsContainer}>
        <ChartGrid
          title="Sound activity"
          sections={chartSections}
          errorFetchingData={errorFetchingData}
        />
      </div>
      <ActivityDataTable userActivity={aggregationQueryResult.data.userActivity} errorFetchingData={errorFetchingData} />
    </div>
  );
};

export default ActivityDataContainer;
