import React, { createContext, useReducer, ReactNode, Dispatch } from "react";

interface ThemeState {
  darkMode: boolean;
}

interface ThemeAction {
  type: "TOGGLE";
}

interface ThemeContextType {
  state: ThemeState;
  dispatch: Dispatch<ThemeAction>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);

const INITIAL_STATE: ThemeState = { darkMode: true };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE":
      return { darkMode: !state.darkMode };
    default:
      return state;
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
