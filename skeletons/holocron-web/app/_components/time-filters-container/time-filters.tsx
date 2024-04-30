
import { apiFetch } from "@/app/_utils/api-fetch";
import styles from "./time-filters.module.css";
import Dropdown from "@/app/_components/dropdown/dropdown";

const TimeFiltersContainer = async ({
  timeFrameValue
}: {
  timeFrameValue: string
}) => {
  const timeFilterQueryPromise = apiFetch<Record<string, string>>(
    "/ui-assets/time-filter"
  );

  const timeFilterQueryResult = await timeFilterQueryPromise;

  const timeFilterOptions = timeFilterQueryResult.ok
    ? Object.entries(timeFilterQueryResult.data).reduce(
      (acc, [label, value]) => {
        return acc.concat({ label, value });
      },
      [] as { label: string; value: string }[]
    )
    : [];

  return (
    <div className={styles.filtersContainer}>
      <Dropdown
        options={timeFilterOptions}
        label="From"
        queryParamName="timeFrame"
        value={timeFrameValue}
      />
    </div>
  );
};

export default TimeFiltersContainer;
