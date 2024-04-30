export interface TopEntity {
  tag_value?: string;
  track_id?: number;
  num_play: number;
  num_playlist_added: number;
  num_download: number;
  popularity_score: number;
  display_name?: string;
}

export interface TrackUsage {
  musicDownloadsAndPlays: {
    songdownloads: number;
    songplays: number;
  };
  downloadChange: { difference: number },
    rankings: {
      topGenres: TopEntity[],
      topMoods: TopEntity[],
      topTracks: TopEntity[],
      topArtists: TopEntity[]
    }
};
