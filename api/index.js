const SW = "https://swapi.dev/api";

export const ENDPOINTS = {
  QUERY_PEOPLE_PAGES: `${SW}/people/?page=1`,
  SEARCH_FILMS_BY_CHAR: (character) => `${SW}/films/${character}`,
  SEARCH_SPECIES: `${SW}/species/1/`,
};
