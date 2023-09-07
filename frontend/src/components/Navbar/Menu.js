import {
  faChevronDown,
  faChevronUp,
  faX,
} from "@fortawesome/free-solid-svg-icons";
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
      <div className={styles.menuAndMailButtonContainer}>
        <ul className={styles.menu}>
          <li
            className={`${styles.listItem} ${styles.closeIcon}`}
            onClick={() => setMenu(false)}
          >
            <FontAwesomeIcon icon={faX} />
          </li>
          <li className={styles.listItem}>
            <Link
              className={styles.link}
              onClick={() => setMenu(false)}
              to='/about'
            >
              <span className={styles.linkContent}>about</span>
            </Link>
          </li>
          <li
            className={styles.listDropdownItem}
            style={{
              borderBottom: isDropdownOpen && "none",
            }}
            onClick={() => setDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
          >
            <div className={styles.listDropdownLinkContent}>
              <div className={styles.itemsContainer}>
                <div className={styles.item}>
                  <span>programmes</span>
                </div>
                {!isDropdownOpen && <FontAwesomeIcon icon={faChevronDown} />}
                {isDropdownOpen && <FontAwesomeIcon icon={faChevronUp} />}
              </div>
            </div>
            {isDropdownOpen && (
              <div className={styles.menuDropdown}>
                <DropdownMenu setMenuVisible={setMenu} />
              </div>
            )}
          </li>

          <li className={styles.listItem}>
            <Link
              className={styles.link}
              onClick={() => setMenu(false)}
              to='/programs/short-courses'
            >
              <span className={styles.linkContent}>short courses</span>
            </Link>
          </li>
          <li className={styles.listItem}>
            <Link
              className={styles.link}
              onClick={() => setMenu(false)}
              to='/programs/corporate'
            >
              <span className={styles.linkContent}>corporate</span>
            </Link>
          </li>
        </ul>
        <a
          onClick={() => setMenu(false)}
          href='mailto:percusion.tierrayaire@gmail.com'
          className={styles.mailButton}
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default Menu;
