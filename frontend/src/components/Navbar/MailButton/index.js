import { emailAddress } from "#constants/midia";
import { useMenuContext } from "#context/menuContext";
import { useTranslate } from "#hooks/useTranslate";
import { Link } from "react-router-dom";
import styles from "./mailButton.module.scss";

export const MailButton = () => {
  const translate = useTranslate();
  const text = translate.components.navbar;
  const { setShowMobile } = useMenuContext();

  return (
    <Link
      onClick={() => setShowMobile(false)}
      to={`mailto:${emailAddress}`}
      className={`${styles.link}`}
    >
      <button type='button' className={styles.button}>
        <span>{text.buttons.contact}</span>
      </button>
    </Link>
  );
};
