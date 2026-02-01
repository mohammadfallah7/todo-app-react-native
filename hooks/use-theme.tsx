import { darkColors, lightColors } from "@/constants";
import { ColorScheme } from "@/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  theme: "dark" | "light";
  toggleTheme: () => void;
  colors: ColorScheme;
};

const ThemeContext = createContext<ThemeContextType>({} as ThemeContextType);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    AsyncStorage.getItem("theme").then((theme) => {
      if (theme) {
        setTheme(theme as "light" | "dark");
      }
    });
  }, []);

  const toggleTheme = async () => {
    setTheme(theme === "light" ? "dark" : "light");
    await AsyncStorage.setItem("theme", theme === "light" ? "dark" : "light");
  };

  const colors = theme === "light" ? lightColors : darkColors;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, colors }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }

  return context;
};
