import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import { DEFAULT_CHARACTER_TYPE } from "../../constants";

import { useCharacters, useLoadingIndicator } from "../hooks";
import { getCharacterById } from "../services/characterService";
import { Layout, Seo } from "../components";

import * as styles from "./character.module.css";

const Character = ({ params }) => {
  const { "*": id } = params; // NOTE: get ID from route path params
  const { handleStartLoading, handleStopLoading } = useLoadingIndicator();
  const { handleResetAllFilters } = useCharacters();
  const [characterData, setCharacterData] = useState(null);

  const fetchCharacterByID = async () => {
    try {
      handleStartLoading();

      //fetching data for ${id} character
      const { character } = await getCharacterById(id);

      setCharacterData(character);
    } catch (error) {
      console.error(error);
    } finally {
      handleStopLoading();
    }
  };

  const handleClickBackBtn = () => {
    handleResetAllFilters();
  };

  useEffect(() => {
    fetchCharacterByID();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <Layout>
      <div className={styles.character_container}>
        <div className={styles.character_header}>
          <Link to="/" onClick={handleClickBackBtn}>
            Назад
          </Link>
          <h2>Personal info about character {characterData?.name}</h2>
        </div>
        <div className={styles.character_details}>
          <div className={styles.character_image}>
            <img src={characterData?.image} alt={characterData?.name} />
          </div>
          <div className={styles.character_info}>
            <p>Status: {characterData?.status}</p>
            <p>Type: {characterData?.type || DEFAULT_CHARACTER_TYPE}</p>
            <p>Gender: {characterData?.gender}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Character;

export const Head = () => <Seo title="Character" />;
