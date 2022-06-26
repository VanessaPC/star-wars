import { useQueries } from "react-query";

export const useQuerySearchCharacterFilms = (films) => {
  return useQueries(
    films.map((filmUrl) => {
      return {
        queryKey: ["films", filmUrl],
        queryFn: () => fetch(filmUrl).then((res) => res.json()),
      };
    })
  );
};
