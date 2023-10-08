const GENDERS = Object.freeze({
  name: "gender",
  optionsArray: ["Male", "Female"],
});

const STATUS = Object.freeze({
  name: "status",
  optionsArray: ["Alive", "Dead", "Unknown"],
});

const DEFAULT_PAGE = 1;

const API = "https://rickandmortyapi.com/graphql";

const API_CONFIG = Object.freeze({
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
});

export { GENDERS, STATUS, DEFAULT_PAGE, API, API_CONFIG };
