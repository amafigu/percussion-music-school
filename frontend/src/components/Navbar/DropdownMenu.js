import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import { coursesPagesNavigationItems } from "#utils/constants";

import React from "react";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = ({ setMenuVisible }) => {
  const navigateToPage = useNavigateToPage();

  const navigateAndCloseMenu = (route) => {
    setMenuVisible(false);
    navigateToPage(route);
  };
  const translate = useTranslate();
  const text = translate.pages.courses;

  return (
    <ul className={styles.dropdownMenu}>
      {coursesPagesNavigationItems.map((item) => (
        <li
          key={item.courseName}
          className={styles.listItem}
          onClick={() => navigateAndCloseMenu(item.path)}
        >
          <span className={styles.linkContent}>
            {text[item.courseName].title}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
