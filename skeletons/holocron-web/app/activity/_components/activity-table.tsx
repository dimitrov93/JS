'use client';

import { PropsWithChildren, ReactNode, createRef, useMemo, useRef, useState } from "react";
import { Text } from '@epidemicsound/design-system';
import { SearchField } from '@epidemicsound/design-system/v2';
import { Table } from '@epidemicsound/design-system';

import Pager from "@/app/_components/pager/pager";

import styles from './activity-table.module.css'
import { AggregateQueryData } from "@/app/_typings/api-responses/aggregate";
import { ERROR_FETCHING_DATA } from "@/app/_constants/constants";

const TABLE_HEADERS = [
  'Email', 'Downloads', 'Played', 'Saved', 'Last activity'
];
const PAGE_SIZE = 10;

interface ActivityDataTableProps {
  userActivity: AggregateQueryData['userActivity'];
  errorFetchingData?: boolean;
}
const ActivityDataTable = (props: PropsWithChildren<ActivityDataTableProps>) => {
  const { userActivity, errorFetchingData } = props;
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);

  const rows: (string | number)[][] = useMemo(
    () => (userActivity || []).map(({ email, downloads, plays, saved, lastactivity }) => [email, downloads, plays, saved, lastactivity]),
    [userActivity]
  );

  const filteredRows = useMemo(() => {
    return rows.filter(row => {
      return row[0].toString().includes(searchValue);
    });
  }, [rows, searchValue]);

  const pages = useMemo(() => {
    const pageCount = Math.ceil(filteredRows.length / PAGE_SIZE);
    return new Array(pageCount).fill(0).map((_, ix) => ix + 1);
  }, [filteredRows]);
  const pageRows = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    return filteredRows.slice(start, end);
  }, [page, filteredRows]);

  return (
    <div className={styles.container}>
      <Text.h1
        variant="textXL"
        className={styles.title}
        suppressHydrationWarning
      >
        User activity
      </Text.h1>
      <SearchField disabled={errorFetchingData} value={searchValue} label="Search by email" clearLabel="Clear" onChange={(s) => { setSearchValue(s); setPage(1); }} />
      <Table headers={TABLE_HEADERS} rows={pageRows as any} />
      <Pager pages={pages} page={page} setPage={setPage} />
      {errorFetchingData && <>{ERROR_FETCHING_DATA}</>}
      {!errorFetchingData && !pageRows.length && <Text.p>No users</Text.p>}
    </div>
  );
};

export default ActivityDataTable;
