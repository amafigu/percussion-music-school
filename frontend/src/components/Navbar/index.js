import useLocaleContext from "#context/localeContext";
import { ROUTES } from "#utils/constants";
import { faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import Menu from "./Menu";
import styles from "./navbar.module.scss";

const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);

  const menuDropdownRef = useRef(null);
  const { translate } = useLocaleContext();
  const text = translate.components.navbar;

  return (
    <div className={styles.navbarWrapper}>
      <nav
        className={styles.navbar}
        onMouseLeave={() => setDropdownOpen(false)}
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
            <span className={styles.linkContent}>
              {text.links.courses} <FontAwesomeIcon icon={faChevronDown} />
            </span>
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
          <a
            href='mailto:percusion.tierrayaire@gmail.com'
            className={`${styles.mailButton} ${styles.hideForMobile}`}
          >
            <span>{text.buttons.contact}</span>
          </a>
        </div>
      </nav>
      <div className={styles.menuWrapper}>
        {isMenuOpen && <Menu setMenu={setMenuOpen} />}
      </div>
    </div>
  );
};

export default Navbar;
