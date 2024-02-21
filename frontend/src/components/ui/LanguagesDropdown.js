import useLocaleContext from "#context/localeContext";
import React from "react";
import styles from "./languagesDropdown.module.scss";

const LanguagesDropdown = ({ setMenuOpen }) => {
  const { setLanguage, language } = useLocaleContext();

  const handleChangeLanguage = (lang) => {
    setLanguage(lang);
    if (setMenuOpen) {
      setMenuOpen(false);
    }
  };

  return (
    <ul className={styles.languageDropdownMenuWrapper}>
      <li
        className={`${styles.listItem} ${
          language === "es" ? styles.activeCategory : ""
        }`}
        onClick={() => handleChangeLanguage("es")}
      >
        <span className={styles.linkContent}>ES</span>
      </li>
      <li
        className={`${styles.listItem} ${
          language === "en" ? styles.activeCategory : ""
        }`}
        onClick={() => handleChangeLanguage("en")}
      >
        <span className={styles.linkContent}>EN</span>
      </li>
    </ul>
  );
};

export default LanguagesDropdown;
