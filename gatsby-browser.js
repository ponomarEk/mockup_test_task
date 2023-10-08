import React from "react";

import { CharactersProvider } from "./src/hooks/useCharacters";
import { LoadingProvider } from "./src/hooks/useLoadingData";

export const wrapRootElement = ({ element }) => (
  <LoadingProvider>
    <CharactersProvider>{element}</CharactersProvider>
  </LoadingProvider>
);
