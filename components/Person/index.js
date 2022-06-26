import { usePlanet } from "../../hooks/useQueryPlanet";

export function Person({ person }) {
  const { _, data: planetData } = usePlanet();

  return (
    <div>
      <h3>{person.name}</h3>
      <div>Homeworld: {planetData && planetData.result.name}</div>
    </div>
  );
}
