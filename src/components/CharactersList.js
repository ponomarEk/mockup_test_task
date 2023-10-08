import React from "react";
import { Link } from "gatsby";

import * as styles from "../styles/CharactersList.module.css";

const CharactersList = ({ characters }) => {
  return (
    <div className={styles.character_list}>
      {characters.length ? (
        characters.map((character) => (
          <Link
            to={`/character/${character.id}`}
            key={character.id}
            className={styles.character_item}
          >
            <img
              src={character.image}
              alt={character.name}
              className={styles.character_image}
            />
            <p className={styles.character_name}>{character.name}</p>
          </Link>
        ))
      ) : (
        <div className={styles.no_characters}>No characters!</div>
      )}
    </div>
  );
};

export default CharactersList;
