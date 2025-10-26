import { TimeFrame } from "../_typings/enums/time-frame";

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const timeFrameMillisecondMap: Record<TimeFrame, number> = {
  [TimeFrame.OneDay]: 86_400_000,
  [TimeFrame.FifteenDays]: 1_296_000_000,
  [TimeFrame.ThirtyDays]: 2_592_000_000,
  [TimeFrame.OneMonth]: 2_592_000_000,
  [TimeFrame.TwoMonths]: 5_184_000_000,
  [TimeFrame.ThreeMonths]: 7_776_000_000,
};
const dateToString = (date: Date, skipYear = false): string =>
  `${date.getDate()} ${months[date.getMonth()]}${skipYear ? '' : ` ${date.getFullYear()}`}`;

export const getTimeframeString = (timeframe: TimeFrame): string => {
  const now = new Date();
  const endTime = new Date(now.getTime() - timeFrameMillisecondMap[timeframe]);

  return `${dateToString(endTime)} - ${dateToString(now)}`;
}

export const formatChartLabel = (label: string): string => {
  const date = new Date(label);
  return dateToString(date, true);
}