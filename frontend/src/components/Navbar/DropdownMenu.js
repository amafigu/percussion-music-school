import React from "react";
import { Link } from "react-router-dom";
import styles from "./dropdownMenu.module.scss";

const DropdownMenu = () => {
  return (
    <ul className={styles.dropdownMenu}>
      <li className={styles.listItem}>
        <Link className={styles.link} to='/programs/regular'>
          <span className={styles.linkContent}>regular</span>
        </Link>
      </li>

      <li className={styles.listItem}>
        <Link className={styles.link} to='/programs/short-courses'>
          <span className={styles.linkContent}>short courses</span>
        </Link>
      </li>
      <li className={styles.listItem}>
        <Link className={styles.link} to='/programs/corporate'>
          <span className={styles.linkContent}>corporate</span>
        </Link>
      </li>
    </ul>
  );
};

export default DropdownMenu;
