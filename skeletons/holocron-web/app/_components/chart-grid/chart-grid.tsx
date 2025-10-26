"use client";

import { Grid, Text, Icon } from "@epidemicsound/design-system";
import styles from "./chart-grid.module.css";
import { PropsWithChildren } from "react";
import LineChart from "../line-chart/line-chart";
import PieChart from "../pie-chart/pie-chart";
import { stringFormatNumber } from "@/app/_utils/number";
import { ERROR_FETCHING_DATA } from "@/app/_constants/constants";

const DEFAULT_CHART_GRID_SIZE = 6;

export interface ChartSection {
  id: string;
  title: string;
  tooltip?: string;
  gridSize?: number;

  type: 'line' | 'pie';

  dataTitles: Record<string, string>;
  data: Record<string, number[]>;
  labels?: string[];
  summaryValue?: number | string;
}

interface ChartGridProps {
  title: string,
  errorFetchingData?: boolean;
  sections: ChartSection[];
}

const ChartGrid = ({
  title,
  sections,
  errorFetchingData,
}: PropsWithChildren<ChartGridProps>) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text.h1
          variant="textXL"
          className={styles.title}
          suppressHydrationWarning
        >
          {title}
        </Text.h1>
      </div>
      <Grid hasRowGutter className={styles.chartGrid}>
        {sections.map((section) => (
          <Grid.Col
            size={section.gridSize || DEFAULT_CHART_GRID_SIZE}
            key={section.id}
            className={styles.chartContainer}
          >
            {section.type === 'line'
              ? (
                <LineChart
                  title={section.title}
                  tooltip={section.tooltip || ''}
                  summaryValue={stringFormatNumber(section.summaryValue || null)}
                  labels={section.labels!}
                  data={section.data}
                  dataTitles={section.dataTitles}
                  errorFetchingData={errorFetchingData}
                />
              )
              : (
                <PieChart
                  title={section.title}
                  data={section.data}
                  isPercentValue
                  dataTitles={section.dataTitles}
                  errorFetchingData={errorFetchingData}
                />
              )
            }
          </Grid.Col>
        ))}
      </Grid>
      {errorFetchingData && <>{ERROR_FETCHING_DATA}</>}
    </div>
  );
};

export default ChartGrid;
