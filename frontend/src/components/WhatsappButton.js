import React from "react";
import styles from "./whatsappButton.module.scss";

const WhatsAppButton = () => {
  return (
    <a
      href='https://api.whatsapp.com/send?phone=5493413223169'
      target='_blank'
      role='button'
      rel='noreferrer'
      className={styles.whatsAppButton}
    >
      <div className={styles.link}>
        <i className={`${styles.customIcon} fab fa-whatsapp fa-2x`}></i>
        <span className={styles.text}>Chat On WhatsApp</span>
      </div>
    </a>
  );
};

export default WhatsAppButton;
