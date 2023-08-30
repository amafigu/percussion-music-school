import React from "react";
import styles from "./whatsappButton.module.scss";

const WhatsAppButton = () => {
  return (
    <div className={styles.whatsAppButton}>
      <a
        href='https://api.whatsapp.com/send?phone=5493413223169'
        target='_blank'
        className={styles.link}
        role='button'
        rel='noreferrer'
      >
        <i className={`${styles.customIcon} fab fa-whatsapp fa-2x`}></i>
        <span className={styles.text}>Chat On WhatsApp</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
