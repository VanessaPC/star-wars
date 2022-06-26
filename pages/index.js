import Head from "next/head";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "react-query";

import styles from "../styles/Home.module.css";
import { queryPagesPeople } from "../hooks/useQuerySearchPeople";
import { Card } from "../components/Card";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { _, inView } = useInView();

  const { isLoading, error, data, fetchNextPage } = useInfiniteQuery(
    "people",
    queryPagesPeople,
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
  }, [inView]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Star Wars</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to Star Wars Universe</h1>

        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value.trim())}
        />

        {isLoading ? (
          <p>Loading </p>
        ) : error ? (
          <p>Error here {error}</p>
        ) : (
          <>
            {data.pages.map((group, i) => (
              <>
                {group.results.map((character) => (
                  <Card key={character.url} character={character} />
                ))}
              </>
            ))}
          </>
        )}
      </main>
    </div>
  );
}
