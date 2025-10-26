"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  Icon,
  Logo,
  TabList,
  TabListItem,
  Text,
} from "@epidemicsound/design-system";
import styles from "./header.module.css";
import { useCallback, useMemo } from "react";
import { Button } from "@epidemicsound/design-system/v2";

const EPIDEMIC_SOUND_URL = "https://www.epidemicsound.com";

const tabs: TabListItem[] = [
  { label: "Activity", path: "/activity" },
  { label: "Track Usage", path: "/music-usage" },
];

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const selectedTabIndex = useMemo(
    () => tabs.findIndex((t) => pathname.includes(t.path!)),
    [pathname]
  );

  const goToEpidemicSound = useCallback(() => {
    window.location.assign(EPIDEMIC_SOUND_URL);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.topBar}>
          <div className={styles.left}>
            <Logo.EpidemicSound className={styles.logo} symbolOnly />
            <div className={styles.divider}></div>
            <Text.span variant="textOverlineS" className={styles.title}>
              Usage Analytics
            </Text.span>
          </div>
          <div className={styles.right}>
            <Button
              onClick={goToEpidemicSound}
              icon={Icon.ArrowRight}
              iconPosition="end"
            >
              Epidemic Sound
            </Button>
          </div>
        </div>
        <div className={styles.heading}>
          <Text.h1 variant="headingL">L&apos;Oréal</Text.h1>
        </div>
      </div>
      <div className={styles.tabsContainer}>
        <TabList
          tabs={tabs}
          selectedTab={selectedTabIndex}
          onClick={(tabIndex) => {
            const currentTab = tabs[tabIndex];
            let path = currentTab.path!;
            const accountId = searchParams.get("accountId");
            if (accountId) {
              path += `?accountId=${accountId}`;
            }
            router.push(path);
          }}
        />
      </div>
    </div>
  );
};

export default Header;
