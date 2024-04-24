import styles from "./sectionBanner.module.scss";

export const SectionBanner = ({
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
