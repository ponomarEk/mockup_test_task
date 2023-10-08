import React, { useState, useEffect } from "react";
import { graphql } from "gatsby";

import { DEFAULT_PAGE } from "../../constans";

import Pagination from "../components/Pagination";
import Layout from "../components/Layout";
import CharactersList from "../components/CharactersList";
import Seo from "../components/Seo";
import FilterSettings from "../components/filterSettings";
import { getCharactersList } from "../services/characterService";
import { useCharacters } from "../hooks/useCharacters";
import useLoading from "../hooks/useLoadingData";

import * as styles from "../styles/pages/index.module.css";

const IndexPage = ({
  data: {
    rickAndMorty: { characters }, // Getting data from the build for the 1 page
  },
}) => {
  const [charactersList, setCharactersList] = useState(
    characters.results || []
  );
  const [totalPages, setTotalPages] = useState(
    characters.info.pages || DEFAULT_PAGE
  );
  const { page, searchText, gender, status } = useCharacters();
  const { isLoading, stopLoading } = useLoading();

  useEffect(() => {
    fetchCharacters();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchText, gender, status]);

  const fetchCharacters = async () => {
    if (!isLoading) return; // We don't need to fetch the data for the 1 page again, because it came from the build

    try {
      //fetching data for ${page}
      const { characters } = await getCharactersList({
        page,
        searchText,
        gender,
        status,
      });

      setCharactersList(characters.results);
      setTotalPages(characters.info.pages || DEFAULT_PAGE);
    } catch (error) {
      console.error(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <Layout>
      <div className={styles.settings_wrapper}>
        <h2>Rick and Morty Characters</h2>
        <FilterSettings />
      </div>
      <CharactersList characters={charactersList} />
      <Pagination totalPages={totalPages} />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <Seo title="Characters List" />;

export const query = graphql`
  query {
    rickAndMorty {
      characters(page: 1) {
        results {
          id
          name
          image
        }
        info {
          pages
        }
      }
    }
  }
`;
