import Head from "next/head";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import { BsLightbulbFill, BsLightbulb } from "react-icons/bs";

import { queryPagesPeople } from "../hooks/useQuerySearchPeople";
import { Card } from "../components/Card";
import { HeroImage } from "../components/HeroImage";
import dashboardImage from "../styles/img/starwars.jpg";

import {
  Container,
  SearchContainer,
  SearchInput,
  ContainerInput,
  ResultContainer,
  ToggleContainer,
  ToggleButton,
} from "./index_styles";

export default function Home({ actionToggleTheme, isDarkTheme }) {
  const [searchTerm, setSearchTerm] = useState("");
  const { ref, inView } = useInView();

  const {
    isLoading,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useInfiniteQuery(
    ["people", searchTerm],
    (queryContext) => queryPagesPeople(queryContext, searchTerm),
    {
      getNextPageParam: (lastPage) => {
        return lastPage.next;
      },
    }
  );

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  console.log("here is the data", data && data.results);

  return (
    <Container>
      <Head>
        <title>Star Wars</title>
      </Head>

      <main>
        {/** This could be a different component a SearchComponent */}
        <SearchContainer>
          <HeroImage src={dashboardImage} alt="" />
          <ContainerInput>
            <SearchInput
              type="text"
              value={searchTerm}
              placeholder="Search your Star Wars character"
              onChange={(e) => setSearchTerm(e.target.value.trim())}
            />
          </ContainerInput>
        </SearchContainer>

        {/** can i move this to another component? */}
        <ToggleContainer>
          <ToggleButton onClick={actionToggleTheme}>
            {isDarkTheme === true ? (
              <BsLightbulb fontSize="15px" />
            ) : (
              <BsLightbulbFill fontSize="15px" />
            )}
          </ToggleButton>
        </ToggleContainer>

        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>There has been an error</p>
        ) : (
          <ResultContainer>
            {data.pages.map((group, i) =>
              group.results.map((character) => (
                <Card key={character.url} character={character} />
              ))
            )}
          </ResultContainer>
        )}

        <button
          ref={ref}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
        >
          {isFetchingNextPage
            ? "Loading more..."
            : hasNextPage
            ? "Load Newer"
            : "Nothing more to load"}
        </button>
      </main>
    </Container>
  );
}
