import useLocaleContext from "#context/localeContext";
import { useMenuContext } from "#context/menuContext";
import React from "react";
import styles from "./languagesSelector.module.scss";

export const LanguagesSelector = () => {
  const { setLanguage, language } = useLocaleContext();
  const { setShowMobile, setShowLanguages } = useMenuContext();

  const changeLanguage = (lang) => {
    setLanguage(lang);
    setShowMobile(false);
    setShowLanguages(false);
  };

  const langOptions = ["es", "en"];

  return (
    <>
      <ul className={styles.list}>
        {langOptions.map((option) => (
          <li
            key={option}
            className={`${styles.listItem} ${
              language === option ? styles.active : ""
            }`}
            onClick={() => changeLanguage(option)}
          >
            <span className={styles.language}>{option.toUpperCase()}</span>
          </li>
        ))}
      </ul>
    </>
  );
};
