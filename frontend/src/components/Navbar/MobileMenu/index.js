import { LanguagesDropdown } from "#components/ui/LanguagesDropdown";
import { ROUTES } from "#constants/routes";
import { useNavigateToPage } from "#hooks/useNavigateToPage";
import { useTranslate } from "#hooks/useTranslate";
import {
  faChevronDown,
  faChevronUp,
  faGlobe,
  faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useState } from "react";
import { DropdownMenu } from "../DropdownMenu";
import styles from "./mobileMenu.module.scss";

export const MobileMenu = ({ setMenu }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const navigateToPage = useNavigateToPage();
  const navigateAndCloseMenu = (route) => {
    setMenu(false);
    navigateToPage(route);
  };
  const translate = useTranslate();
  const text = translate.components.navbar;

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
          <li
            className={styles.listDropdownItem}
            style={{
              borderBottom: isLanguageDropdownOpen && "none",
            }}
            onClick={() => setLanguageDropdownOpen((prevState) => !prevState)}
          >
            <div className={styles.listDropdownLinkContent}>
              <div className={styles.itemsContainer}>
                <div className={styles.item}>
                  <FontAwesomeIcon
                    icon={faGlobe}
                    className={styles.languageIcon}
                    size='lg'
                  />
                </div>
                {!isLanguageDropdownOpen && (
                  <FontAwesomeIcon icon={faChevronDown} />
                )}
                {isLanguageDropdownOpen && (
                  <FontAwesomeIcon icon={faChevronUp} />
                )}
              </div>
            </div>
            {isLanguageDropdownOpen && (
              <div className={styles.menuDropdown}>
                <LanguagesDropdown setMenuVisible={setMenu} />
              </div>
            )}
          </li>
          <li
            className={styles.listItem}
            onClick={() => navigateAndCloseMenu(ROUTES.ABOUT)}
          >
            <span className={styles.linkContent}>{text.links.about}</span>
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
                  <span>{text.links.courses}</span>
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
        </ul>
        <a
          onClick={() => setMenu(false)}
          href='mailto:percusion.tierrayaire@gmail.com'
          className={styles.mailButton}
        >
          {text.buttons.contact}
        </a>
      </div>
    </div>
  );
};
