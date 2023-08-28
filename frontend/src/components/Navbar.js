import React from "react"
import { Link } from "react-router-dom"
import styles from "./navbar.module.scss"

const Navbar = () => {
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

          <Link className={styles.link} to='/programs'>
            <span className={styles.linkContent}>programs</span>
          </Link>
          <Link className={styles.link} to='/faq'>
            <span className={styles.linkContent}>faq</span>
          </Link>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
