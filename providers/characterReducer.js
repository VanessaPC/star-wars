import { ACTIONS } from "./constants";

export const characterReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_CHARACTER:
      return {
        selection: { ...action.payload },
      };
    default:
      return {
        state,
      };
  }
};
