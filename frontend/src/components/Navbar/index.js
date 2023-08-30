import { React, useRef, useState } from "react";
import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import styles from "./navbar.module.scss";
const Navbar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toogleDropdown = () => {
    setDropdownOpen((prevIsDropdownOpen) => !prevIsDropdownOpen);
    console.log("toogleDropdown aft ", isDropdownOpen);
  };

  const menuDropdownRef = useRef(null);

  return (
    <div className={styles.navbarWrapper}>
      <nav className={styles.navbar}>
        <div className={styles.column}>
          <img
            className={styles.logo}
            src={`${process.env.PUBLIC_URL}/assets/logo.png`}
            alt='logo'
          />
        </div>
        <div className={styles.column}>
          <Link className={styles.link} to='/about'>
            <span className={styles.linkContent}>about</span>
          </Link>

          <div className={styles.link} onClick={() => toogleDropdown()}>
            <span className={styles.linkContent}>programmes</span>
            {isDropdownOpen && (
              <div ref={menuDropdownRef} className={styles.menuDropdown}>
                <DropdownMenu />
              </div>
            )}
          </div>

          <Link className={styles.link} to='/faq'>
            <span className={styles.linkContent}>faq</span>
          </Link>
          <a
            href='mailto:percusion.tierrayaire@gmail.com'
            className={styles.mailButton}
          >
            <span>Contact Us</span>
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
