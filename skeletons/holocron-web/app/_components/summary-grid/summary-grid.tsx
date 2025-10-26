"use client";

import { Grid, Text, Icon } from "@epidemicsound/design-system";
import styles from "./summary-grid.module.css";
import { PropsWithChildren } from "react";
import { stringFormatNumber } from "@/app/_utils/number";
import { Tooltip } from "@epidemicsound/design-system/v2";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { DEFAULT_SUMMARY_GRID_SIZE, SummarySection } from "./interfaces";
import { activitySections, musicUsageSections } from "./constants";
import { NO_DATA } from "@/app/_constants/constants";

interface SummaryGridProps {
  sections: SummarySection[];
  title: string;
}

const SummaryGrid = ({
  sections,
  title,
}: PropsWithChildren<SummaryGridProps>) => {
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
        <div className="sep" style={{ flex: 1 }} />
      </div>
      <Grid hasRowGutter className={styles.summaryGrid}>
        {sections.map((section) => (
          <Grid.Col
            size={section.gridSize || DEFAULT_SUMMARY_GRID_SIZE}
            key={section.id}
            className={styles.section}
          >
            <div className={styles.sectionHeader}>
              <Text.p
                variant="textOverlineS"
                color="secondary"
                className={styles.sectionTitle}
              >
                {section.title}
              </Text.p>
              {section.tooltip && (
                <Tooltip label={section.tooltip}>
                  <div className={styles.tooltipIconHolder}>
                    <Icon.Info color="secondary" />
                  </div>
                </Tooltip>
              )}
            </div>
            <div className={styles.sectionContent}>
              {Array.isArray(section.data) ? (
                <div className={styles.sectionDataArray}>
                  {section.data.map((dataItem: any) => (
                    <div className={styles.dataItem} key={dataItem.label}>
                      <Text.p variant="textS">{dataItem.label}</Text.p>
                      <Text.p variant="textS" color="secondary">
                        {dataItem.value}
                      </Text.p>
                    </div>
                  ))}
                  {!section.data.length && <div className={[styles.arraySectionNoData, styles.noData].join(' ')}>{NO_DATA}</div>}
                </div>
              ) : (
                <div className={styles.sectionData}>
                  <Text.p variant="textS">
                    {stringFormatNumber(section.data.value)}
                    {(!section.data.value && section.data.value !== 0) && <span className={styles.noData}>{NO_DATA}</span>}
                  </Text.p>
                </div>
              )}
            </div>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

const SummaryGridLoader = () => {
  const pathname = usePathname();
  const sections = pathname.includes("music-usage")
    ? musicUsageSections
    : pathname.includes("activity")
      ? activitySections
      : [];

  return <SummaryGrid sections={sections} title="Summary" />
}

export default dynamic(() => Promise.resolve(SummaryGrid), { ssr: false, loading: SummaryGridLoader });
export { SummaryGridLoader };
