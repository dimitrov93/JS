import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider({ children }) {
  const [userFavorites, setUserFavorites] = useState([]);


  function addFavoriteHandler(favMeetup) {
    setUserFavorites((prevFavs) => {
      return prevFavs.concat(favMeetup)
    })
  }

  function removeFavoriteHandler(meetupId) {
    setUserFavorites((prevFavs) => {
      return prevFavs.filter(item => item.id !== meetupId)
    })
  }

  function itemIsFacoriteHAndler(meetupId) {
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFacoriteHAndler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {children}
    </FavoritesContext.Provider>
  );
}
export default FavoritesContext