import { useEffect, useState } from "react";

export default function useTheme() {
    const [theme, setTheme] = useState("dark");

    // Load saved theme
    useEffect(() => {
        const saved = localStorage.getItem("theme");
        if (saved) setTheme(saved);
    }, []);

    // Apply theme to body
    useEffect(() => {
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

    return { theme, toggleTheme };
}