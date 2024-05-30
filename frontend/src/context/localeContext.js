import React, { createContext, useContext, useState } from "react";

import en from "#i18n/en.json";
import es from "#i18n/es.json";
const languages = { en, es };
const LocaleContext = createContext();

export const LocaleContextProvider = ({ children }) => {
  const [language, setLanguage] = useState("es");

  return (
    <LocaleContext.Provider
      value={{ translate: languages[language], language, setLanguage }}
    >
      {children}
    </LocaleContext.Provider>
  );
};

const useLocaleContext = () => useContext(LocaleContext);

export default useLocaleContext;
