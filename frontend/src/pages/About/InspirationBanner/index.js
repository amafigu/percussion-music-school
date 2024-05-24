import styles from "./inspirationBanner.module.scss";

export const InspirationBanner = ({
  parentClass,
  imageSrc,
  imageAlt,
  imageClass,
  content,
  textLayerClass,
  textClass,
}) => (
  <div className={styles[parentClass]}>
    {imageSrc && (
      <img src={imageSrc} alt={imageAlt} className={styles[imageClass]} />
    )}
    <div>
      {content && (
        <div className={styles[textLayerClass]}>
          <span className={styles[textClass]}>{content}</span>
        </div>
      )}
    </div>
  </div>
);
