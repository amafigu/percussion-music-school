import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./navigationMenu.module.scss";

export const NavigationMenu = ({ navigationFunction, items }) => {
  const translate = useTranslate();
  const text = translate.components.navigationMenu;

  return (
    <nav className={styles.linksRow} aria-label='navigator'>
      <ul>
        {items.map((item) => (
          <li
            className={styles.listItem}
            onClick={() => navigationFunction(item.ref)}
            key={item.name}
            aria-label='navigation item'
          >
            <span>{text[item.name]}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
