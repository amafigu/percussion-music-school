import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <div className={styles.footer}>
        <div className={styles.columnsContainer}>
          <div className={`${styles.column} ${styles.logoColumn}`}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                alt='logo'
              />
              <div className={styles.text}>
                <div className={styles.word}>TIERRA</div>
                <div className={styles.word}>Y AIRE</div>
              </div>
            </div>

            <div className={styles.teaserText}>
              Established since 2018, Tierra Y Aire is the people’s choice for
              drum education in Rosario.
            </div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Links</h3>
            <Link className={styles.link} to='/about'>
              <span className={styles.content}>About</span>
            </Link>

            <Link className={styles.link} to='/programs'>
              <span className={styles.content}>Programs</span>
            </Link>
            <Link className={styles.link} to='/faq'>
              <span className={styles.content}>Faq</span>
            </Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>Programmes</h3>
            <Link className={styles.link} to='/programs/regular'>
              <span className={styles.content}>Regular Programme</span>
            </Link>

            <Link className={styles.link} to='/programs/short-courses'>
              <span className={styles.content}>Short Courses</span>
            </Link>
            <Link className={styles.link} to='/programs/corporate'>
              <span className={styles.content}>Corporate</span>
            </Link>
          </div>
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h3 className={styles.title}>Social Links</h3>
            <div className={styles.icons}>
              <a
                href='https://www.instagram.com/tierrayairepercusion/'
                target='_blanck'
              >
                <i
                  className={`fab fa-instagram fa-2x ${styles.customIcon}`}
                ></i>
              </a>
              <a
                href='https://www.facebook.com/profile.php?id=100051507198313'
                target='_blanck'
              >
                <i
                  className={`fab fa-facebook-f fa-2x ${styles.customIcon}`}
                ></i>
              </a>
              <a
                href='https://www.youtube.com/channel/UCsiOSd5aX8udIbNF5LST8ag'
                target='_blanck'
              >
                <i className={`fab fa-youtube fa-2x ${styles.customIcon}`}></i>
              </a>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <div className={styles.text}>
            <span>
              Tierra y Aire Percusion is a registered trademark in Argentina. ©
              2023 Tierra y Aire Percusion - Argentina. All Rights Reserved.
            </span>
          </div>

          <div className={styles.links}>
            <Link className={styles.linkLegal} to='/terms-conditions'>
              Terms of Use
            </Link>
            <span> | </span>
            <Link className={styles.linkLegal} to='/privacy-policy '>
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
