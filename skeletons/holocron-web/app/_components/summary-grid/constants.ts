import { LOADING } from "@/app/_constants/constants";
import { SummarySection } from "./interfaces";

const loadersList = new Array(5).fill({ label: LOADING, value: LOADING });
export const musicUsageSections: SummarySection[] = [
  {
    id: "tracks-downloaded",
    title: "Tracks downloaded",
    data: {
      value: LOADING,
    },
    gridSize: 6,
  },
  {
    id: "tracks-played",
    title: "Tracks played",
    data: {
      value: LOADING,
    },
    gridSize: 6,
  },
  {
    id: "top-genres",
    title: "Top genres",
    data: loadersList,
    gridSize: 6,
  },
  {
    id: "top-moods",
    title: "Top moods",
    data: loadersList,
    gridSize: 6,
  },
];

export const activitySections: SummarySection[] = [
  {
    id: "downloads",
    title: "Downloads",
    data: {
      value: LOADING,
    }
  },
  {
    id: "plays",
    title: "Plays",
    data: {
      value: LOADING,
    }
  },
  {
    id: "ratio",
    title: "Play to download ratio",
    tooltip: "Play to download ratio tooltip",
    data: {
      value: LOADING,
    },
  },
  {
    id: "saved",
    title: "Saved",
    tooltip: "Saved songs and sfx tooltip",
    data: {
      value: LOADING
    },
  },
  {
    id: "playlists-created",
    title: "Playlists created",
    data: {
      value: LOADING,
    },
  },
  {
    id: "projects-created",
    title: "Projects created",
    data: {
      value: LOADING,
    },
  },
];