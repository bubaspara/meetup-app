import React from "react";
import { useContext } from "react/cjs/react.development";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

export default function Favorites() {
  const favoritesCtx = useContext(FavoritesContext);

  let content;

  if (favoritesCtx.totalFavorites === 0)
    content = <p>You got no favorites yet. Add some!</p>;
  else content = <MeetupList meetups={favoritesCtx.favorites} />;

  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}
