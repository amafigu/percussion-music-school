import LanguagesDropdown from "#components/LanguagesDropdown";
import { useTranslate } from "#hooks/useTranslate";
import { ROUTES } from "#utils/constants";
import {
  faBars,
  faChevronDown,
  faChevronUp,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import MobileMenu from "./MobileMenu";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isLanguageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuDropdownRef = useRef(null);
  const translate = useTranslate();
  const text = translate.components.navbar;

  const setAllDropdownsClosed = () => {
    setLanguageDropdownOpen(false);
    setDropdownOpen(false);
  };

  return (
    <div className={styles.navbarWrapper}>
      <nav
        className={styles.navbar}
        onMouseLeave={() => setAllDropdownsClosed()}
      >
        <div className={`${styles.column} ${styles.left}`}>
          <div className={styles.logoContainer}>
            <Link className={styles.reactLink} to='/'>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt='logo'
              />
            </Link>
            <div className={styles.text}>
              <div className={styles.word}>TIERRA</div>
              <div className={styles.word}>Y AIRE</div>
            </div>
          </div>
          <div
            className={styles.menuIconWrapper}
            onClick={() => setMenuOpen(true)}
          >
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </div>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
          <Link className={styles.link} to={ROUTES.ABOUT}>
            <span className={styles.linkContent}>{text.links.about}</span>
          </Link>
          <div
            className={styles.link}
            onMouseEnter={() => setDropdownOpen(true)}
            onClick={() => setDropdownOpen(true)}
          >
            <span className={`${styles.linkContent} ${styles.linkCourses}`}>
              {text.links.courses}
            </span>
            {!isDropdownOpen && <FontAwesomeIcon icon={faChevronDown} />}
            {isDropdownOpen && <FontAwesomeIcon icon={faChevronUp} />}
            {isDropdownOpen && (
              <div
                ref={menuDropdownRef}
                className={styles.menuDropdown}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <DropdownMenu setMenuVisible={setMenuOpen} />
              </div>
            )}
          </div>
          <div
            className={styles.languageChevronContainerWrapper}
            onMouseEnter={() => setLanguageDropdownOpen(true)}
            onClick={() => setLanguageDropdownOpen((prevState) => !prevState)}
          >
            <div className={styles.languageChevronContainer}>
              <FontAwesomeIcon
                icon={faGlobe}
                className={styles.languageIcon}
                size='lg'
              />
              {!isLanguageDropdownOpen && (
                <FontAwesomeIcon icon={faChevronDown} />
              )}
              {isLanguageDropdownOpen && <FontAwesomeIcon icon={faChevronUp} />}
            </div>

            {isLanguageDropdownOpen && (
              <div className={styles.menuDropdown}>
                <LanguagesDropdown />
              </div>
            )}
          </div>
          <a
            href='mailto:percusion.tierrayaire@gmail.com'
            className={`${styles.mailButton} ${styles.hideForMobile}`}
          >
            <span>{text.buttons.contact}</span>
          </a>
        </div>
      </nav>
      <div className={styles.menuWrapper}>
        {isMenuOpen && <MobileMenu setMenu={setMenuOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
