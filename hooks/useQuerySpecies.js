import { useQuery } from "react-query";
import { ENDPOINTS } from "../api";

function searchSpecies(speciesUrl) {
  return fetch(speciesUrl).then((response) => response.json());
}

export const useQuerySpecies = (speciesUrls) => {
  const speciesUrl = speciesUrls[0] ?? ENDPOINTS.SEARCH_SPECIES;
  return useQuery(["species", speciesUrl], () => searchSpecies(speciesUrl));
};
