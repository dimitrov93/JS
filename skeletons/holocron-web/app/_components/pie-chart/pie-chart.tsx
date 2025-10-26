'use client';

import { Text, Icon, Spinner } from '@epidemicsound/design-system';
import styles from './pie-chart.module.css';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useMemo } from 'react';
import { ERROR_FETCHING_DATA } from '@/app/_constants/constants';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const COLORS = [
  'rgba(255, 130, 194, 1)',
  'rgba(187, 118, 255, 1)',
  'rgba(202, 38, 204, 1)'
];

interface PieChartProps {
  title: string
  data: { [key: string]: number[] },
  dataTitles: { [key: string]: string },
  isPercentValue?: boolean
  errorFetchingData?: boolean
}
const PieChart = ({ title, data, dataTitles, isPercentValue, errorFetchingData }: PieChartProps) => {

  const isLoading = useMemo(() => {
    return !Object.values(data).flat().length;
  }, [data])

  const chartData = {
    labels: Object.values(dataTitles),
    datasets: [{
      data: Object.values(data).map(([d]) => d),
      borderWidth: 0,
      backgroundColor: COLORS,
      hoverOffset: 0
    }],
  };

  const chartOptions = {
    type: 'line',
    data: chartData,
    options: {
      plugins: {
        legend: {
          display: false
        },
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text.p variant="textOverlineS" color="secondary" className={styles.title}>{title}</Text.p>
      </div>

      {
        errorFetchingData
          ? (
            <div className={styles.dataContainer}>
              {ERROR_FETCHING_DATA}
            </div>
          )
          : isLoading
            ? (
              <div className={styles.loaderContainer}>
                <Spinner className={styles.loader} size="large" />
              </div>
            )
            : (
              <div className={styles.dataContainer}>
                <div className={styles.dataTitlesContainer}>
                  {Object.entries(dataTitles).map(([key, dataTitle], idx) => (
                    <div className={styles.dataTitle} key={key}>
                      <div className={styles.dataTitleColor} style={{ backgroundColor: COLORS[idx] }} />
                      <Text.p variant="textXS">{dataTitle} {data[key]}{isPercentValue && '%'}</Text.p>
                    </div>
                  ))}
                </div>
                <div className={styles.chartContainer}>
                  <div className={styles.chart}>
                    <Pie data={chartData} options={chartOptions.options} />
                  </div>
                </div>
              </div>
            )
      }
    </div>
  );
};

export default PieChart;
