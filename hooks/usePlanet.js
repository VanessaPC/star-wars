import { useQuery } from "react-query";

function searchPlanets(planetUrl) {
  return fetch(planetUrl).then((response) => response.json());
}

export const usePlanet = (planetUrl) => {
  return useQuery(["people", planetUrl], () => searchPlanets(planetUrl));
};
