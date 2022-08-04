import  CharItem  from "./CharItem";
import {useState, useCallback} from 'react';

const CharacterList = ({ characters }) => {
  const [favorite, setFavorite] = useState('');

  const selectFavorite = useCallback((name) => {
    setFavorite(name);
  }, []);
  return (
    <>
      <h2>{favorite || 'Select Favorite'}</h2>
      <ul>
        {characters.map((x) => (
          <CharItem key={x.name} name={x.name} onClick={selectFavorite} />
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
