import React, { useState, useEffect } from "react";
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const saved = localStorage.getItem(key);
    return saved !== null ? JSON.parse(saved) : initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue]; 
}
export const ThemeSelector = () => {
  const [theme, setTheme] = useLocalStorage("theme", "light");
    useEffect(() => {
    document.body.className = theme; 
  }, [theme]);
  return (
    <div>
      <h3>Thème actuel : {theme}</h3>

      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};
