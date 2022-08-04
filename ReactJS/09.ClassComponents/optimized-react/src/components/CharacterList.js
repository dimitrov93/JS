import  CharItem  from "./CharItem";
import {useState, useCallback, useMemo} from 'react';

function wait(ms) {
  var start = Date.now(),
      now = start;
  while (now - start < ms) {
    now = Date.now();
  }
}

const CharacterList = ({ characters }) => {
  const [favorite, setFavorite] = useState('');

  const selectFavorite = useCallback((name) => {
    setFavorite(name);
  }, []);

  const meaningOfLife = useMemo(() => {
    wait(500);
    return 42
  }, [])


  return (
    <>
      <h2>{favorite || 'Select Favorite'}</h2>
      <h3>{meaningOfLife}</h3>
      <ul>
        {characters.map((x) => (
          <CharItem key={x.name} name={x.name} onClick={selectFavorite} />
        ))}
      </ul>
    </>
  );
};

export default CharacterList;
