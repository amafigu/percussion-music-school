export const scrollToTop = () => {
  window.scrollTo(0, 0);
};

export const titleCase = (str, separator) => {
  if (str) {
    return str
      .split(separator)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  }
};

export const camelCaseToTitleCase = (str) => {
  if (str) {
    const spaced = str.replace(/([A-Z])/g, " $1").trim();

    return spaced
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }
};

export const checkHttp = (url) => {
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : `http://${url}`;
};
