import { useEffect } from "react";

export const useEffectScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};

export const titleCase = (str, separator) => {
  return str
    .split(separator)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const camelCaseToTitleCase = (str) => {
  const spaced = str.replace(/([A-Z])/g, " $1").trim();

  return spaced
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};
