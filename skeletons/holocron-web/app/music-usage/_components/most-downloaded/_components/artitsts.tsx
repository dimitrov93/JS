'use client';

import { Text } from '@epidemicsound/design-system';

import styles from './artists.module.css';
import { useMemo, useState } from 'react';
import Pager, { PAGE_SIZE } from '@/app/_components/pager/pager';
import { LOADING, NO_DATA } from '@/app/_constants/constants';

interface IArtist {
  name: string;
  imageUrl: string;
}

const loaderArtistArray: IArtist[] = new Array(5).fill(null).map(() => ({
  name: LOADING,
  imageUrl: '',
}));
const noDataArtistArray: IArtist[] = new Array(5).fill(null).map(() => ({
  name: NO_DATA,
  imageUrl: '',
}));

interface ArtistsProps {
  artists: IArtist[];
}
const Artists = ({ artists }: ArtistsProps) => {

  const [page, setPage] = useState(1);

  const currentPageArtists = useMemo(() => {
    const start = (page - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const artistsList = artists.slice(start, end);

    if (!artistsList.length) {
      return noDataArtistArray;
    }
    return artistsList;
  }, [page, artists]);
  const pages = useMemo(() => {
    const pageCount = Math.ceil(artists.length / PAGE_SIZE);
    return new Array(pageCount).fill(0).map((_, ix) => ix + 1);
  }, [artists]);

  return (
    <div className={styles.container}>
      <div className={styles.artistListContainer}>
        {currentPageArtists.map(artist => (
          <div key={artist.name} className={styles.artistContainer}>
            <div className={styles.imageContainer} style={{ backgroundImage: `url(${artist.imageUrl})` }} />
            <div className={styles.titleContainer}>
              <Text.p variant="textM">{artist.name}</Text.p>
            </div>
          </div>
        ))}
      </div>
      <Pager pages={pages} page={page} setPage={setPage} />
    </div>
  );
};

export const ArtistsLoader = () => <Artists artists={loaderArtistArray} />;

export default Artists;
