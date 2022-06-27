import { ENDPOINTS } from "../api";

export const queryPagesPeople = (
  { pageParam = `${ENDPOINTS.QUERY_PEOPLE_PAGES}` },
  searchTerm
) => {
  return fetch(`${pageParam}&search=${searchTerm}`).then((res) => res.json());
};
