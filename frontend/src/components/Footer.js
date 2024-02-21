import { useTranslate } from "#hooks/useTranslate";
import { coursesPagesNavigationItems } from "#utils/constants";
import { camelCaseToTitleCase } from "#utils/utils";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

const Footer = () => {
  const translate = useTranslate();
  const text = translate.components.footer;
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

            <div className={styles.teaserText}>{text.teaserText}</div>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.linksColumn.title)}
            </h3>
            <Link className={styles.link} to='/about'>
              <span className={styles.content}>
                {camelCaseToTitleCase(text.linksColumn.about)}
              </span>
            </Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.coursesColumn.title)}
            </h3>
            {coursesPagesNavigationItems.map((item) => (
              <Link
                className={styles.link}
                to={item.path}
                key={item.courseName}
              >
                <span className={styles.content}>
                  {camelCaseToTitleCase(text.coursesColumn[item.courseName])}
                </span>
              </Link>
            ))}
          </div>
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.socialMediaLinksColumn.title)}
            </h3>
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
          <div className={styles.textCopyright}>
            <span>{text.copyright}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
