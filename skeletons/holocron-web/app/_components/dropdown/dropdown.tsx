"use client";

import {
  PropsWithChildren,
  useCallback,
  useState,
} from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { Select, SelectOptions } from "@epidemicsound/design-system/v2";

interface DropdownProps {
  options: SelectOptions<any>;
  value: any;
  label: string;
  queryParamName: string;
}

const summarySelectStyles = {
  marginBottom: 0,
  minWidth: "150px",
};

export default function Dropdown(props: PropsWithChildren<DropdownProps>) {
  const { options, label, value, queryParamName } = props;
  const [dropdownValue, setDropdownValue] = useState(value);
  const searchParams = useSearchParams();
  const router = useRouter();
  const onChangeCallback = useCallback(
    (value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(queryParamName, value);
      router.push(`?${params.toString()}`);
      setDropdownValue(value);
    },
    [queryParamName, router, searchParams]
  );

  return (
    <Select
      options={options}
      style={summarySelectStyles}
      label={label}
      value={dropdownValue}
      onChange={onChangeCallback}
    />
  );
}
