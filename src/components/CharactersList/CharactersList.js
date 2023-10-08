import React from "react";
import { Link } from "gatsby";

import * as styles from "./CharactersList.module.css";

const CharactersList = ({ characters }) => {
  return (
    <div className={styles.character_list}>
      {characters.length ? (
        characters.map(({ name, id, image }) => (
          <Link
            to={`/character/${id}`}
            key={id}
            className={styles.character_item}
          >
            <img src={image} alt={name} className={styles.character_image} />
            <p className={styles.character_name}>{name}</p>
          </Link>
        ))
      ) : (
        <div className={styles.no_characters}>No characters!</div>
      )}
    </div>
  );
};

export default CharactersList;
