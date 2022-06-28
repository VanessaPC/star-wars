import { useContext } from "react";
import { UserSelection } from "../../providers/characterProvider";
import { useQuerySearchCharacterFilms } from "../../hooks/useQueryFilms";
import { truncate, descendentSort } from "../../helpers";
import {
  Container,
  InformationContainer,
  TableContainer,
} from "../../styles/pages/character";

export default function Character() {
  const [state] = useContext(UserSelection);
  const results = useQuerySearchCharacterFilms(state.selection.films ?? []);

  if (state.selection.length === 0) return <p>Nothing selected</p>;

  return (
    <Container>
      <h1>{state.selection.name}</h1>
      <h3>Movies</h3>
      <span>
        {state.selection.name} has appeared in {results && results.length}
        movies.
      </span>
      <TableContainer>
        <p>Title</p>
        <p>Release date</p>
        <p>Description</p>
      </TableContainer>
      {results &&
        descendentSort(results).map((filmResult) => {
          if (filmResult.status === "loading") return <p>Loading...</p>;
          if (filmResult.status === "error") return <p> Error:</p>;

          const film = filmResult.data;

          return (
            <InformationContainer key={film.release_date}>
              <p>{film.title}</p>
              <p>{film.release_date}</p>
              <p> {truncate(film.opening_crawl, 150)}</p>
            </InformationContainer>
          );
        })}
    </Container>
  );
}
