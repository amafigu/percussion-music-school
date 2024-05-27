import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navigationMenu.module.scss";

export const NavigationMenu = ({ isScroll, items }) => {
  const navigate = useNavigate();
  const translate = useTranslate();
  const text = translate.components.navigationMenu;

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className={styles.linksRow} aria-label='links bar'>
      <ul>
        {items.map((item) => (
          <li
            className={styles.listItem}
            onClick={
              isScroll ? () => scrollToRef(item.ref) : () => navigate(item.ref)
            }
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
