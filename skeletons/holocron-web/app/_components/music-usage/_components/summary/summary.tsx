'use client';

import { Grid, Text, Icon } from '@epidemicsound/design-system';
import styles from './summary.module.css';
import { Key, useMemo } from 'react';
import { Select } from '@epidemicsound/design-system/v2';

const DEFAULT_SUMMARY_GRID_SIZE = 4;
interface ISummarySection {
  id: Key;
  title: string;
  tooltip?: string;
  dataIsArray?: boolean;
  data: any;
  gridSize?: number; 
}

const TEAM_OPTIONS = [
  {
    label: 'All',
    value: 'all',
  }
];
const FROM_OPTIONS = [
  {
    label: 'Last 28 days',
    value: 'last-28-days',
  }
]

interface SummaryProps {
}
const Summary = ({ }: SummaryProps) => {

  const summarySelectStyles = useMemo(() => ({
    marginBottom: 0,
    minWidth: '100px',
  }), []);

  const sections: ISummarySection[] = [
    {
      id: 'music-downloaded',
      title: 'Music downloaded',
      tooltip: 'Music downloaded tooltip',
      data: {
        value: '4 561'
      },
      gridSize: 6,
    }, {
      id: 'sfx-downloaded',
      title: 'SFX downloaded',
      tooltip: 'SFX downloaded tooltip',
      data: {
        value: '646'
      },
      gridSize: 6,
    // }, {
    //   id: 'download-change-past-month',
    //   title: 'Download change past month',
    //   tooltip: 'Download change past month tooltip',
    //   data: {
    //     value: '+31%'
    //   }
    }, {
      id: 'top-genres',
      title: 'Top genres',
      dataIsArray: true,
      data: [
        { value: '54%', label: 'Hip Hop' },
        { value: '21%', label: 'Electronic & Dance' },
        { value: '11%', label: 'Film' },
        { value: '5%', label: 'Pop' },
        { value: '3%', label: 'Rock' },
      ],
    }, {
      id: 'top-subgenres',
      title: 'Top subgenres',
      dataIsArray: true,
      data: [
        { value: '21%', label: 'Trap' },
        { value: '18%', label: 'Mainstream Hip Hop' },
        { value: '10%', label: 'Alternative Hip Hop' },
        { value: '7%', label: 'Beats' },
        { value: '5%', label: 'RnB' },
      ],
    }, {
      id: 'top-moods',
      title: 'Top moods',
      dataIsArray: true,
      data: [
        { value: '32%', label: 'Dark' },
        { value: '16%', label: 'Restless' },
        { value: '12%', label: 'Hopeful' },
        { value: '8%', label: 'Happy' },
        { value: '7%', label: 'Epic' },
      ],
    }
  ];

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text.h1 variant="textXL" className={styles.title}>Summary</Text.h1>
        <div className="sep" style={{ flex: 1 }} />
        <div
          className={styles.filters}
        >
          <Select
            options={TEAM_OPTIONS}
            style={summarySelectStyles}
            label='Team'
            value={TEAM_OPTIONS[0].value}
          />

          <Select
            options={FROM_OPTIONS}
            style={summarySelectStyles}
            label='From'
            value={FROM_OPTIONS[0].value}
          />
        </div>
      </div>
      <Grid hasRowGutter className={styles.summaryGrid}>
        {sections.map((section) => (
          <Grid.Col size={section.gridSize || DEFAULT_SUMMARY_GRID_SIZE} key={section.id} className={styles.section}>
            <div className={styles.sectionHeader}>
              <Text.p variant="textOverlineS" color="secondary" className={styles.sectionTitle}>{section.title}</Text.p>
              {section.tooltip && (
                <Icon.Info color="secondary"/>
              )}
            </div>
            <div className={styles.sectionContent}>
              {section.dataIsArray ? (
                <div className={styles.sectionDataArray}>
                  {section.data.map((dataItem: any) => (
                    <div className={styles.dataItem} key={dataItem.label}>
                      <Text.p variant="textS">{dataItem.label}</Text.p>
                      <Text.p variant="textS" color="secondary">{dataItem.value}</Text.p>
                    </div>
                  ))}
                </div>) : (
                <div className={styles.sectionData}>
                  <Text.p variant="textS">{section.data.value}</Text.p>
                </div>
              )}
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default Summary;
