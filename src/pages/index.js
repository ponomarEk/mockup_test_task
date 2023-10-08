import React, { useState, useEffect, useRef } from "react";
import { graphql } from "gatsby";

import { DEFAULT_PAGE } from "../../constants";

import {
  Pagination,
  Layout,
  CharactersList,
  Seo,
  Filters,
} from "../components";
import { getCharactersList } from "../services/characterService";
import { useCharacters, useLoadingIndicator } from "../hooks";

import * as styles from "./index.module.css";

const IndexPage = ({
  data: {
    rickAndMorty: { characters }, // NOTE:  Getting data from the build for the 1 page
  },
}) => {
  const [charactersList, setCharactersList] = useState(
    characters.results || []
  );
  const [totalPages, setTotalPages] = useState(
    characters.info.pages || DEFAULT_PAGE
  );
  const { page, searchText, gender, status } = useCharacters();
  const { handleStartLoading, handleStopLoading } = useLoadingIndicator();
  const didMountRef = useRef(false);

  const fetchCharacters = async () => {
    try {
      handleStartLoading();

      // NOTE: fetching data with filters, search value for special page

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
      handleStopLoading();
    }
  };

  useEffect(() => {
    // NOTE: We don't need to fetch the data for the 1 page again, because it came from the build

    if (didMountRef.current) {
      fetchCharacters();
    }

    didMountRef.current = true;

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchText, gender, status]);

  return (
    <Layout>
      <div className={styles.settings_wrapper}>
        <h2>Rick and Morty Characters</h2>
        <Filters />
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
