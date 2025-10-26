"use client";

import { Text, Icon, Spinner } from "@epidemicsound/design-system";
import styles from "./line-chart.module.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { useMemo } from "react";
import { ERROR_FETCHING_DATA, NO_DATA } from "@/app/_constants/constants";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const COLORS = ["rgba(255, 151, 55, 1)", "rgba(202, 38, 204, 1)"];
const loadingAndNoDataLabels = new Array(3).fill("");
const noDataDatasets = [
  {
    label: "",
    data: [],
    fill: false,
    tension: 0.1,
  },
];

interface LineChartProps {
  title: string;
  tooltip: string;
  summaryValue: number | string;
  data: { [key: string]: number[] };
  dataTitles: { [key: string]: string };
  labels: string[];
  errorFetchingData?: boolean;
}
const LineChart = ({
  title,
  summaryValue,
  tooltip,
  labels,
  data,
  dataTitles,
  errorFetchingData,
}: LineChartProps) => {
  const isLoading = useMemo(() => {
    return !labels.length || !Object.values(data).flat().length;
  }, [data, labels.length]);

  const noData = useMemo(() => {
    return (
      !summaryValue &&
      summaryValue !== 0 &&
      (!data ||
        Object.values(data).every(
          (d) => !d.length || (d.length === 2 && d.every((v) => v === 0))
        ))
    );
  }, [data, summaryValue]);

  const chartData = {
    labels: isLoading || noData ? loadingAndNoDataLabels : labels,
    datasets: noData
      ? noDataDatasets
      : Object.entries(data).map(([key, value], idx) => ({
          label: dataTitles[key],
          data: value,
          fill: false,
          borderColor: COLORS[idx],
          tension: 0.1,
        })),
  };

  const chartOptions = {
    type: "line",
    data: chartData,
    options: {
      responsive: true,
      maintainAspectRatio: false,
      pointRadius: 3,
      pointHitRadius: 0,
      lineTension: 0.3,
      padding: 0,
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          border: {
            display: false,
          },
          beginAtZero: true,
          ticks: {
            padding: 20,
            color: "rgba(255,255,255,.72157)",
            callback: function (value: number | string) {
              return +value > 1000 ? +value / 1000 + "k" : value;
            },
            font: {
              size: 12,
              family: "'Inter', sans-serif",
            },
          },
        },
        x: {
          grid: {
            display: false,
          },
          border: {
            display: false,
          },
          ticks: {
            padding: 20,
            color: "rgba(255,255,255,.72157)",
            font: {
              size: 12,
              family: "'Inter', sans-serif",
            },
          },
        },
      },
    },
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.titleSection}>
          <Text.p
            variant="textOverlineS"
            color="secondary"
            className={styles.title}
          >
            {title}
          </Text.p>
          <Text.p variant="textS">{summaryValue || "-"}</Text.p>
        </div>

        <div className={styles.dataSection}>
          <div className={styles.dataTitlesContainer}>
            {Object.values(dataTitles).map((dataTitle, idx) => (
              <div className={styles.dataTitle} key={idx}>
                <div
                  className={styles.dataTitleColor}
                  style={{ backgroundColor: COLORS[idx] }}
                />
                <Text.p variant="textXS">{dataTitle}</Text.p>
              </div>
            ))}
          </div>

          {tooltip && <Icon.Info color="secondary" />}
        </div>
      </div>

      {errorFetchingData ? (
        <div className={styles.chartContainer}>{ERROR_FETCHING_DATA}</div>
      ) : isLoading ? (
        <div className={styles.loaderContainer}>
          <Spinner className={styles.loader} size="large" />
        </div>
      ) : (
        <div className={styles.chartContainer}>
          <Line data={chartData} options={chartOptions.options} />

          {noData && <div className={styles.noData}>{NO_DATA}</div>}
        </div>
      )}
    </div>
  );
};

export default LineChart;
