import { founder } from "#constants/images";
import { facebookUrl, instagramUrl, youtubeUrl } from "#constants/midia";
import { useTranslate } from "#hooks/useTranslate";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styles from "./founderBanner.module.scss";

export const FounderBanner = () => {
  const translate = useTranslate();
  const text = translate.components.founderBanner;

  return (
    <section className={styles.founderBanner} aria-label='founder bio'>
      <div className={styles.textAndIconsContainer}>
        <div className={styles.imageContainer}>
          <img
            alt='founder drumming'
            className={styles.founderImage}
            src={`${process.env.PUBLIC_URL}${founder}`}
          />
        </div>
        <div>
          <h2 className={styles.name}>Rolo Veron</h2>
          <div className={styles.position}>{text.role}</div>
          <p>{text.descriptionFirst}</p>
          <p>{text.descriptionSecond}</p>
          <div className={styles.socialIcons}>
            <div className={styles.text}>
              <span>
                {text.follow} Rolo Veron {text.followAt}
              </span>
            </div>
            <div className={styles.row}>
              <div className={styles.icons}>
                <Link
                  to={instagramUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size='2x'
                    className={styles.customIcon}
                  />
                </Link>
                <Link
                  to={facebookUrl}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    size='2x'
                    className={styles.customIcon}
                  />
                </Link>
                <Link to={youtubeUrl} target='_blank' rel='noopener noreferrer'>
                  <FontAwesomeIcon
                    icon={faYoutube}
                    size='2x'
                    className={styles.customIcon}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
