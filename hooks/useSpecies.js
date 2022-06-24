import { useQuery } from "react-query";

function searchSpecies(speciesUrl) {
  return fetch(speciesUrl).then((response) => response.json());
}

export const useSpecies = (speciesUrls) => {
  const speciesUrl = speciesUrls[0] ?? "https://swapi.dev/api/species/1/";
  return useQuery(["species", speciesUrl], () => searchSpecies(speciesUrl));
};
