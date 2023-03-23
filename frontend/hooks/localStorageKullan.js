import { useState } from "react";

const localStorageKullan = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(() => {
    const value = window.localStorage.getItem(key);
    if (!value) {
      window.localStorage.setItem(key, JSON.stringify(initialValue));
      return initialValue;
    } else {
      return JSON.parse(value);
    }
  });

  const setLocalStorage = (newValue) => {
    setStoredValue(newValue);
    window.localStorage.setItem(key, JSON.stringify(newValue));
  };

  return [storedValue, setLocalStorage];
};

export default localStorageKullan;
