export const DEFAULT_SUMMARY_GRID_SIZE = 4;

type DefaultSummarySectionData = { value: string | number };
type SummarySectionData =
  | { label: string; value: string | number }[]
  | DefaultSummarySectionData;

export interface SummarySection {
  id: string;
  title: string;
  tooltip?: string;
  data: SummarySectionData;
  gridSize?: number;
}