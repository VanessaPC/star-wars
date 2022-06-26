import { useContext } from "react";
import { UserSelection } from "../providers/characterProvider";
import { useQuerySearchCharacterFilms } from "../hooks/useQueryFilms";
import { truncate, descendentSort } from "../helpers";

export default function Character() {
  const [state] = useContext(UserSelection);
  const results = useQuerySearchCharacterFilms(state.selection.films ?? []);

  if (state.selection.length === 0) return <p>Nothing selected</p>;

  return (
    <>
      <h2>{state.selection.name}</h2>
      {results &&
        descendentSort(results).map((filmResult) => {
          if (filmResult.status === "loading") return <p>Loading...</p>;
          if (filmResult.status === "error") return <p> Error: {error}</p>;

          const film = filmResult.data;

          return (
            <div key={film.release_date}>
              <h4>{film.title}</h4>
              <p>{film.release_date}</p>
              <p>{truncate(film.opening_crawl, 150)}</p>
            </div>
          );
        })}
    </>
  );
}
