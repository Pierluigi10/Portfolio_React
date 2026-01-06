import React, { createContext, useReducer, ReactNode, Dispatch, useContext, useEffect } from "react";

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

// Get initial state from localStorage or system preference
const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return true;
  
  const saved = localStorage.getItem("darkMode");
  if (saved !== null) {
    return saved === "true";
  }
  
  // Check system preference
  if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
    return true;
  }
  
  return true; // Default to dark mode
};

const INITIAL_STATE: ThemeState = { darkMode: getInitialTheme() };

const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case "TOGGLE":
      const newDarkMode = !state.darkMode;
      // Save to localStorage
      if (typeof window !== "undefined") {
        localStorage.setItem("darkMode", String(newDarkMode));
      }
      return { darkMode: newDarkMode };
    default:
      return state;
  }
};

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, INITIAL_STATE);
  
  // Apply theme class to document root for better CSS support
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (state.darkMode) {
        document.documentElement.classList.add("dark-mode");
        document.documentElement.classList.remove("light-mode");
      } else {
        document.documentElement.classList.add("light-mode");
        document.documentElement.classList.remove("dark-mode");
      }
    }
  }, [state.darkMode]);

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
