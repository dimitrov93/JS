import React, { useContext } from "react";
import FavoritesContext from "../store/favorites-context";

import MeetupList from "../components/meetups/MeetupList";

const Favorites = () => {
  const favCtx = useContext(FavoritesContext);

  let content;

  if (favCtx.totalFavorites === 0) {
    content = <p>You have not favorites. Start adding some</p>;
  } else {
    content = <MeetupList meetups={favCtx.favorites} />;
  }
  return (
    <section>
      <h1>My meetups</h1>
      {content}
    </section>
  );
};

export default Favorites;
