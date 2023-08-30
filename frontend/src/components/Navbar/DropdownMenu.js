import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = () => {
  return (
    <div className={styles.dropdownMenu}>
      <Link className={styles.link} to='/programs'>
        <span className={styles.linkContent}>programs</span>
      </Link>
    </div>
  );
};

export default DropdownMenu;
