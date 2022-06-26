import { ENDPOINTS } from "../api";

export const queryPagesPeople = ({
  pageParam = ENDPOINTS.QUERY_PEOPLE_PAGES,
}) => {
  return fetch(pageParam).then((res) => res.json());
};
