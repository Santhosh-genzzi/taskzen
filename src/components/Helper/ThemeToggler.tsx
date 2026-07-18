"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { LuMoon, LuSun } from "react-icons/lu";

const ThemeToggler = () => {
  const [mounted, setMounted] = useState(false);

  const { theme, systemTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <button
      onClick={() =>
        setTheme(currentTheme === "dark" ? "light" : "dark")
      }
      className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 flex items-center justify-center transition-all duration-300 shadow-md"
    >
      {currentTheme === "dark" ? (
        <LuSun className="w-5 h-5" />
      ) : (
        <LuMoon className="w-5 h-5 text-black" />
      )}
    </button>
  );
};

export default ThemeToggler;