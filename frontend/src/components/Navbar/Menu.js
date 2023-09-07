import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import styles from "./menu.module.scss";

const Menu = ({ setMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  console.log("isDropdownOpen ", isDropdownOpen);
  return (
    <div className={styles.menuWrapper}>
      <ul className={styles.menu}>
        <li className={styles.listItem} onClick={() => setMenu(false)}>
          X
        </li>
        <li className={styles.listItem}>
          <Link className={styles.link} to='/about'>
            <span className={styles.linkContent}>about</span>
          </Link>
        </li>
        <li
          className={styles.listDropdownItem}
          onClick={() => setDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
        >
          <span className={styles.listDropdownLinkContent}>
            programmes <FontAwesomeIcon icon={faChevronDown} />
          </span>
          {isDropdownOpen && (
            <div className={styles.menuDropdown}>
              <DropdownMenu />
            </div>
          )}
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
    </div>
  );
};

export default Menu;
