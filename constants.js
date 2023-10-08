const GENDERS = Object.freeze({
  name: "gender",
  optionsArray: ["Male", "Female"],
});

const STATUS = Object.freeze({
  name: "status",
  optionsArray: ["Alive", "Dead", "Unknown"],
});

const DEFAULT_PAGE = 1;

const DEFAULT_CHARACTER_TYPE = "None";

const API_BASE_URL = "https://rickandmortyapi.com/graphql";

const API_CONFIG = Object.freeze({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export {
  GENDERS,
  STATUS,
  DEFAULT_PAGE,
  DEFAULT_CHARACTER_TYPE,
  API_BASE_URL,
  API_CONFIG,
};
