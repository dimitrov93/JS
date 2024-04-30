import {
  SummaryGridLoader,
} from "@/app/_components/summary-grid/summary-grid";
import { MostDownloadedLoader } from "../most-downloaded/most-downloaded";
import { ArtistsLoader } from "../most-downloaded/_components/artitsts";

export default async function MusicUsageDataContainerLoader() {
  return (
    <>
      <SummaryGridLoader />
      <MostDownloadedLoader />
      <ArtistsLoader />
    </>
  );
}
