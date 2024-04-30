import { PropsWithChildren } from "react";

import SummaryGrid from "@/app/_components/summary-grid/summary-grid";

import styles from "./activity-data-container.module.css";
import ChartGrid from "@/app/_components/chart-grid/chart-grid";
import { getTimeframeString } from "@/app/_utils/date-time";
import { TimeFrame } from "@/app/_typings/enums/time-frame";
import { generateChartSections, generateSummarySections } from "../_utils/generate-activity-data";

interface ActivityDataContainerProps {
  timeFrame: string;
}
const ActivityDataContainerLoader = (props: PropsWithChildren<ActivityDataContainerProps>) => {
  const { timeFrame } = props;

  const sections = generateSummarySections(null, true);
  const chartSections = generateChartSections(null, true);

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
        />
      </div>
    </div>
  );
};

export default ActivityDataContainerLoader;
