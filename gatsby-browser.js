import React from "react";

import { CharactersProvider } from "./src/hooks/useCharacters";
import { LoadingIndicatorProvider } from "./src/hooks/useLoadingIndicator";

export const wrapRootElement = ({ element }) => (
  <LoadingIndicatorProvider>
    <CharactersProvider>{element}</CharactersProvider>
  </LoadingIndicatorProvider>
);
