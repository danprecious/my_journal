import { State } from "../types/globalTypes";

export const reducer = (
  state: State,
  action: { type: string; payload: any }
): State => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        openMenu: action.payload,
      };
    default:
      return state;
  }
};
