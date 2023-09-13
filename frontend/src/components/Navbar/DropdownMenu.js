import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = ({ setMenuVisible }) => {
  const navigate = useNavigate();

  const navigateAndCloseMenu = (route) => {
    setMenuVisible(false);
    navigate(route);
  };

  return (
    <ul className={styles.dropdownMenu}>
      <li
        className={styles.listItem}
        onClick={() => navigateAndCloseMenu("/courses/regular")}
      >
        <span className={styles.linkContent}>regular</span>
      </li>

      <li
        className={styles.listItem}
        onClick={() => navigateAndCloseMenu("/courses/short")}
      >
        <span className={styles.linkContent}>short courses</span>
      </li>
      <li
        className={styles.listItem}
        onClick={() => navigateAndCloseMenu("/courses/corporate")}
      >
        <span className={styles.linkContent}>corporate</span>
      </li>
    </ul>
  );
};

export default DropdownMenu;
