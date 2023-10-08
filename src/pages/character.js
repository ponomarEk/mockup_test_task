import React, { useEffect, useState } from "react";
import { Link } from "gatsby";

import useLoading from "../hooks/useLoadingData";
import { getCharacterById } from "../services/characterService";
import Layout from "../components/Layout";
import Seo from "../components/Seo";

import * as styles from "../styles/pages/character.module.css";

const Character = ({ params }) => {
  const { "*": id } = params;
  const { startLoading, stopLoading } = useLoading();
  const [characterData, setCharacterData] = useState(null);

  useEffect(() => {
    fetchCharacterByID();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const fetchCharacterByID = async () => {
    try {
      startLoading();

      //fetching data for ${id} character
      const { character } = await getCharacterById(id);

      setCharacterData(character);
    } catch (error) {
      console.error(error);
    } finally {
      stopLoading();
    }
  };

  return (
    <Layout>
      {characterData ? (
        <div className={styles.character_container}>
          <div className={styles.character_header}>
            <Link to="/">Назад</Link>
            <h2>Personal info about character {characterData.name}</h2>
          </div>
          <div className={styles.character_details}>
            <div className={styles.character_image}>
              <img src={characterData.image} alt={characterData.name} />
            </div>
            <div className={styles.character_info}>
              <p>Status: {characterData.status}</p>
              <p>Type: {characterData.type || "None"}</p>
              <p>Gender: {characterData.gender}</p>
            </div>
          </div>
        </div>
      ) : (
        "Loading..."
      )}
    </Layout>
  );
};

export default Character;

export const Head = () => <Seo title="Character" />;
