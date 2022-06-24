import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { useSearchPeople } from "../hooks/useSearchPeople";
import { Character } from "../components/Character";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const { isLoading, data } = useSearchPeople(searchTerm);
  console.log("data", data);

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

        {data &&
          data.results.map((character) => (
            <Character key={character.url} character={character} />
          ))}
      </main>
    </div>
  );
}
