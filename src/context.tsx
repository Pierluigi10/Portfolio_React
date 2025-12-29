import React, { createContext, useReducer, ReactNode, Dispatch, useContext } from "react";

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

/**
 * Custom hook to access theme context
 * Throws an error if used outside ThemeProvider
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  
  return context;
}
