export const stringFormatNumber = (num: number | null | string): string => {
  if (typeof num === 'string') {
    return num;
  }
  if (num === null) {
    return '';
  }
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};