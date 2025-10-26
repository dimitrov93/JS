export interface AggregateQueryData {
  totalsOfActivity: {
    plays: number;
    saves: number;
    downloads: number;
    projectscreated: number;
    playlistscreated: number;
    ratio: number;
  };
  totalsOfActivity2: {
    playlistscreated: number;
    projectscreated: number;

    ratio: number;

    sfxdownloads: number;
    songdownloads: number;

    sfxplaysum: number;
    songplaysum: number;

    sfxsavedtoplaylist: number;
    songsavedtoplaylist: number;
  };
  breakdownByActivity: {
    plays: {
      songsum: number;
      sfxsum: number;
      eventdate: string;
    }[];
    downloads: {
      sfxdownloads: number;
      songdownloads: number;
      eventdate: string;
    }[];
    saves: {
      savedtoplaylist: number;
      eventdate: string;
    }[];
    playToDownload: {
      eventdate: string;
      ratio: number;
    }[];
  };
  fullBreakdownByActivity: {
    sfxdownloads: number;
    songsavedtoplaylist: number;
    sfxsavedtoplaylist: number;
    songdownloads: number;
    sfxplaysum: number;
    songplaysum: number;
    eventdate: string;
    ratio: number;
  }[];
  platformDistribution: {
    plugin: number;
    web: number;
    mobile: number;
  };
  userActivity: {
    lastactivity: string;
    plays: number;
    user_id: number;
    saved: number;
    downloads: number;
    email: string;
  }[];

  fullBreakdownByActivitySeries: {
    total_activity: number[],

    num_playlist_added_sfx: number[],
    num_download_sfx: number[],
    num_project_created: number[],
    num_play_song: number[],
    num_playlist_created: number[],
    num_download_song: number[],
    num_play_sfx: number[],
    num_playlist_added: number[],
    num_playlist_added_song: number[],
    num_download: number[],

    ratio_plugin: number[],
    ratio_web: number[],
    ratio_mobile: number[],

    activity_web: number[],
    activity_mobile: number[],
    activity_plugin: number[],

    event_date: string[]
  },
}
