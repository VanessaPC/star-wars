import { usePlanet } from "../../hooks/usePlanet";
import { useSpecies } from "../../hooks/useSpecies";

export function Character({ character }) {
  console.log("character", character);
  const { isLoading: planetLoading, data: planetData } = usePlanet(
    character.homeworld
  );
  const { isLoading: speciesLoading, data: speciesData } = useSpecies(
    character.species
  );

  console.log("planetData", planetData);
  return (
    <div>
      <h3>{character.name}</h3>
      <div>{speciesData && speciesData.name}</div>
      <div>
        Homeworld : {planetData && planetData.name} - population:{" "}
        {planetData && planetData?.population}
      </div>
    </div>
  );
}
