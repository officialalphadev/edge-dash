import { useEffect } from "react";
import { useLocalStorage } from "./use-local-storage";

export function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage("color-theme", "light");

  useEffect(() => {
    const className = "dark";
    const html = document.documentElement.classList;
    colorMode === className ? html.add(className) : html.remove(className);
  }, [colorMode]);

  return { colorMode, setColorMode };
}
