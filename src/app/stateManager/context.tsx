import React, { createContext, useReducer } from "react";
import {
  State,
  GlobalStateProviderProps,
  GlobalContext,
} from "../types/globalTypes";
import { reducer } from "./reducer";

export const GlobalState = createContext<GlobalContext | null>(null);

export const GlobalStateProvider = ({ children }: GlobalStateProviderProps) => {
  const defaultState: State = {
    openMenu: false,
  };

  const [state, dispatch] = useReducer(reducer, defaultState);

  return (
    <GlobalState.Provider value={{ state, dispatch }}>
      {children}
    </GlobalState.Provider>
  );
};
