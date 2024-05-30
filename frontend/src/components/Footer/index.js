import { logo } from "#constants/images";
import { facebookUrl, instagramUrl, youtubeUrl } from "#constants/midia";
import { navigationMenuItems } from "#constants/navigationMenuItems";
import { ROUTES } from "#constants/routes";
import { useTranslate } from "#hooks/useTranslate";
import { camelCaseToTitleCase } from "#utils/utils";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.scss";

export const Footer = () => {
  const translate = useTranslate();
  const text = translate.components.footer;

  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.columns}>
          <div className={`${styles.column} ${styles.logoColumn}`}>
            <div className={styles.logoContainer}>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}${logo}`}
                alt='logo'
              />
              <div className={styles.name}>
                <span>TIERRA</span>
                <span>Y AIRE</span>
              </div>
            </div>
            <p className={styles.paragraph}>{text.teaserText}</p>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.linksColumn.title)}
            </h3>
            <Link className={styles.link} to={ROUTES.ABOUT}>
              <span className={styles.content}>
                {camelCaseToTitleCase(text.linksColumn.about)}
              </span>
            </Link>
          </div>
          <div className={styles.column}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.coursesColumn.title)}
            </h3>
            {navigationMenuItems.map((item) => (
              <Link className={styles.link} to={item.ref} key={item.name}>
                <span className={styles.content}>
                  {camelCaseToTitleCase(text.coursesColumn[item.name])}
                </span>
              </Link>
            ))}
          </div>
          <div className={`${styles.column} ${styles.socialColumn}`}>
            <h3 className={styles.title}>
              {camelCaseToTitleCase(text.socialMediaLinksColumn.title)}
            </h3>
            <div className={styles.icons}>
              <Link to={instagramUrl} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faInstagram} size='2x' />
              </Link>
              <Link to={facebookUrl} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faFacebookF} size='2x' />
              </Link>
              <Link to={youtubeUrl} target='_blank' rel='noopener noreferrer'>
                <FontAwesomeIcon icon={faYoutube} size='2x' />
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <span>{text.copyright}</span>
        </div>
      </div>
    </footer>
  );
};
