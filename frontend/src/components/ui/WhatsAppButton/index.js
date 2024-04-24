import { useTranslate } from "#hooks/useTranslate";
import React from "react";
import styles from "./whatsappButton.module.scss";

export const WhatsAppButton = () => {
  const translate = useTranslate();
  const text = translate.components.whatsAppButton;
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
        <span className={styles.text}>{text.text}</span>
      </div>
    </a>
  );
};
