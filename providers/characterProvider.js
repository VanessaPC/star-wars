import { useReducer, createContext } from "react";
import { characterReducer } from "./characterReducer";

export const UserSelection = createContext();

const initialState = {
  selection: {},
};

export const UserSelectionProvider = (props) => {
  const [state, dispatch] = useReducer(characterReducer, initialState);

  return (
    <UserSelection.Provider value={[state, dispatch]}>
      {props.children}
    </UserSelection.Provider>
  );
};
