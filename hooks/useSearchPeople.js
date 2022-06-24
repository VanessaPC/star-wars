import { useQuery } from "react-query";

function searchPeople(term) {
  return fetch(`https://swapi.dev/api/people/?search=${term}`).then(
    (response) => response.json()
  );
}

export const useSearchPeople = (term) => {
  // const [char, setChar] = useState("");
  // const [err, setErr] = useState("");

  // let res = await fetch(url);

  // if (res.ok) {
  //   setChar(res);
  //   return char;
  // } else {
  //   setErr(res);
  //   return err;
  // }

  return useQuery(["people", term], () => searchPeople(term));
};
