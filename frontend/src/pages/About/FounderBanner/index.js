import { useTranslate } from "#hooks/useTranslate";
import styles from "./founderBanner.module.scss";

export const FounderBanner = () => {
  const translate = useTranslate();
  const text = translate.pages.about;

  return (
    <div className={styles.founderBanner}>
      <div className={styles.imageContainer}>
        <img
          alt='founder'
          className={styles.founderImage}
          src={`${process.env.PUBLIC_URL}/assets/card3.png`}
        />
      </div>
      <div className={styles.textAndIconsContainer}>
        <div className={styles.textAndIcons}>
          <div className={styles.name}>Rolo Veron</div>
          <div className={styles.position}>{text.artist.role}</div>
          <p>{text.artist.descriptionFirst}</p>
          <br />
          <p>{text.artist.descriptionSecond}</p>
          <div className={styles.socialIcons}>
            <div className={styles.text}>
              {text.artist.follow} Rolo Veron {text.artist.followAt}
            </div>
            <div className={styles.row}>
              <div className={styles.icons}>
                <a
                  href='https://www.instagram.com/rolo.veron/'
                  target='_blanck'
                >
                  <i
                    className={`fab fa-instagram fa-2x ${styles.customIcon}`}
                  ></i>
                </a>
                <a
                  href='https://www.facebook.com/rolo.veron.3'
                  target='_blanck'
                >
                  <i
                    className={`fab fa-facebook-f fa-2x ${styles.customIcon}`}
                  ></i>
                </a>
                <a
                  href='https://www.youtube.com/channel/UCAHUUHVEh7ov0qv8FIE11ZQ'
                  target='_blanck'
                >
                  <i
                    className={`fab fa-youtube fa-2x ${styles.customIcon}`}
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
