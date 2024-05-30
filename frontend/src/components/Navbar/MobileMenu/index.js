import { ChevronToggler } from "#components/ui/ChevronToggler/index";
import { LanguagesSelector } from "#components/ui/LanguagesSelector";
import { ROUTES } from "#constants/routes";
import { useMenuContext } from "#context/menuContext";
import { useOnNavigate } from "#hooks/useOnNavigate";
import { useTranslate } from "#hooks/useTranslate";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";
import { CoursesList } from "../CoursesList";
import { MailButton } from "../MailButton";
import styles from "./mobileMenu.module.scss";

export const MobileMenu = () => {
  const { onNavigate } = useOnNavigate();
  const translate = useTranslate();
  const text = translate.components.navbar;
  const { showMobile, setShowMobile, showCourses, setShowCourses } =
    useMenuContext();

  return (
    <nav className={styles.wrapper} aria-label='mobile menu'>
      <div className={styles.container}>
        <ul className={styles.list}>
          <li className={styles.closeIcon} onClick={() => setShowMobile(false)}>
            <FontAwesomeIcon icon={faX} />
          </li>
          <li className={styles.itemContainer}>
            <div className={styles.selector}>
              <LanguagesSelector />
            </div>
          </li>
          <li
            className={styles.listItem}
            onClick={() => onNavigate(setShowMobile, ROUTES.ABOUT)}
          >
            <span className={styles.linkContent}>{text.links.about}</span>
          </li>
          <li
            className={styles.itemContainer}
            style={{
              borderBottom: showMobile && "none",
            }}
          >
            <div className={styles.courses}>
              <span>{text.links.courses}</span>
              <ChevronToggler show={showCourses} setShow={setShowCourses} />
            </div>
            {showCourses && <CoursesList />}
          </li>
          <li className={styles.mailButton}>
            <MailButton />
          </li>
        </ul>
      </div>
    </nav>
  );
};
