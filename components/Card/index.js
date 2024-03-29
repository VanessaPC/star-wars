import { useContext } from "react";
import { useRouter } from "next/router";
import { ThemeContext } from "styled-components";
import { GiAnimalSkull, GiWorld } from "react-icons/gi";
import { BsFillPeopleFill } from "react-icons/bs";
import { useQueryPlanet } from "../../hooks/useQueryPlanet";
import { useQuerySpecies } from "../../hooks/useQuerySpecies";
import { UserSelection } from "../../providers/characterProvider";
import { ACTIONS } from "../../providers/constants";
import { Container, MoreButton, CharacterInformation } from "./styles";

export function Card({ character }) {
  const [, dispatch] = useContext(UserSelection);
  const theme = useContext(ThemeContext);

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
    <Container>
      <h3>{character.name}</h3>
      <>
        <CharacterInformation>
          <GiAnimalSkull fill={theme.colors.themeHighlight} />
          <span>Species: {speciesData && speciesData.name}</span>
        </CharacterInformation>
        <CharacterInformation>
          <GiWorld fill={theme.colors.themeHighlight} />
          <span>Homeworld: {planetData && planetData.name}</span>
        </CharacterInformation>
        <CharacterInformation>
          <BsFillPeopleFill fill={theme.colors.themeHighlight} />
          <span>Population: {planetData && planetData?.population}</span>
        </CharacterInformation>
      </>
      <MoreButton
        onClick={() => {
          router.push("/character");
          setCharacter();
        }}
      >
        Learn more
      </MoreButton>
    </Container>
  );
}
