import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import { coursesPagesNavigationItems } from "#utils/constants";

import React from "react";
import styles from "./dropdownMenu.module.scss";

export const DropdownMenu = ({ setMenuVisible }) => {
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
          key={item.name}
          className={styles.listItem}
          onClick={() => navigateAndCloseMenu(item.ref)}
        >
          <span className={styles.linkContent}>{text[item.name].title}</span>
        </li>
      ))}
    </ul>
  );
};
