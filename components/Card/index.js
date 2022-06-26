import { useContext } from "react";
import { useRouter } from "next/router";
import { useQueryPlanet } from "../../hooks/useQueryPlanet";
import { useQuerySpecies } from "../../hooks/useQuerySpecies";
import { UserSelection } from "../../providers/characterProvider";
import { ACTIONS } from "../../providers/constants";

export function Card({ character }) {
  const [, dispatch] = useContext(UserSelection);

  const { isLoading: planetLoading, data: planetData } = useQueryPlanet(
    character.homeworld
  );
  const { isLoading: speciesLoading, data: speciesData } = useQuerySpecies(
    character.species
  );

  const router = useRouter();

  const setCharacter = () => {
    dispatch({
      type: ACTIONS.ADD_CHARACTER,
      payload: {
        name: character.name,
        species: speciesData.name,
        homeworld: planetData.name,
        population: planetData?.population,
        films: character.films,
      },
    });
  };

  return (
    <div>
      <h3>{character.name}</h3>

      <div>
        <p>Species: {speciesData && speciesData.name}</p>
        <p>Homeworld : {planetData && planetData.name}</p>
        <p>Population: {planetData && planetData?.population}</p>
      </div>
      <button
        onClick={() => {
          router.push("/character");
          setCharacter();
        }}
      >
        Read more
      </button>
    </div>
  );
}
