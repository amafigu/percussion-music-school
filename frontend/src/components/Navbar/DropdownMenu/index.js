import { navigationMenuItems } from "#constants/navigationMenuItems";
import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dropdownMenu.module.scss";

export const DropdownMenu = ({ setMenuVisible }) => {
  const navigate = useNavigate();

  const onNavigate = (route) => {
    setMenuVisible(false);
    navigate(route);
  };

  const translate = useTranslate();
  const text = translate.pages.courses;

  return (
    <ul className={styles.dropdownMenu}>
      {navigationMenuItems.map((item) => (
        <li
          key={item.name}
          className={styles.listItem}
          onClick={() => onNavigate(item.ref)}
        >
          <span className={styles.linkContent}>{text[item.name].title}</span>
        </li>
      ))}
    </ul>
  );
};
