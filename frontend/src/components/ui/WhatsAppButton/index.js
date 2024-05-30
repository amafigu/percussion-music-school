import { whatsappUrl } from "#constants/midia";
import { useMenuContext } from "#context/menuContext";
import { useTranslate } from "#hooks/useTranslate";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import styles from "./whatsappButton.module.scss";

export const WhatsAppButton = () => {
  const translate = useTranslate();
  const text = translate.components.whatsAppButton;
  const { showMobile } = useMenuContext();

  return (
    <>
      {!showMobile && (
        <Link
          to={whatsappUrl}
          className={styles.link}
          aria-label='whatsapp chat'
        >
          <div className={styles.content} aria-label='content'>
            <FontAwesomeIcon icon={faWhatsapp} size='2x' />
            <span className={styles.text}>{text.text}</span>
          </div>
        </Link>
      )}
    </>
  );
};
