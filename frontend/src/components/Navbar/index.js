import { LanguagesSelector } from "#components/ui/LanguagesSelector";
import { logo } from "#constants/images";
import { ROUTES } from "#constants/routes";
import { useMenuContext } from "#context/menuContext";
import { useTranslate } from "#hooks/useTranslate";
import { faBars, faGlobe } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { React } from "react";
import { Link } from "react-router-dom";
import { ChevronToggler } from "../ui/ChevronToggler";
import { CoursesList } from "./CoursesList";
import { MailButton } from "./MailButton";
import { MobileMenu } from "./MobileMenu";
import styles from "./navbar.module.scss";

export const Navbar = () => {
  const {
    showMobile,
    setShowMobile,
    showCourses,
    setShowCourses,
    showLanguages,
    setShowLanguages,
  } = useMenuContext();

  const translate = useTranslate();
  const text = translate.components.navbar;

  return (
    <div className={styles.wrapper}>
      <nav className={styles.container}>
        <div className={`${styles.column} ${styles.logoColumn}`}>
          <div className={styles.logoContainer}>
            <Link className={styles.logoLink} to={ROUTES.HOME}>
              <img
                className={styles.logo}
                src={`${process.env.PUBLIC_URL}${logo}`}
                alt='logo'
              />
            </Link>
            <div className={styles.name}>
              <span>TIERRA</span>
              <span>Y AIRE</span>
            </div>
          </div>
          <div className={styles.menuIcon} onClick={() => setShowMobile(true)}>
            <FontAwesomeIcon icon={faBars} size='2xl' />
          </div>
        </div>
        <div className={`${styles.column} ${styles.linksColumn}`}>
          <Link className={styles.option} to={ROUTES.ABOUT}>
            <span className={styles.linkContent}>{text.links.about}</span>
          </Link>
          <div className={styles.option}>
            <span className={`${styles.linkContent} ${styles.linkCourses}`}>
              {text.links.courses}
            </span>
            <ChevronToggler show={showCourses} setShow={setShowCourses} />
            {showCourses && (
              <div className={styles.list}>
                <CoursesList />
              </div>
            )}
          </div>
          <div className={styles.option}>
            <div className={styles.toggler}>
              <FontAwesomeIcon
                icon={faGlobe}
                className={styles.icon}
                size='lg'
              />
              <ChevronToggler show={showLanguages} setShow={setShowLanguages} />
            </div>
            {showLanguages && (
              <div className={styles.list}>
                <LanguagesSelector />
              </div>
            )}
          </div>
          <div className={styles.hideForMobile}>
            <MailButton />
          </div>
        </div>
      </nav>
      <div className={styles.mobileMenu}>{showMobile && <MobileMenu />}</div>
    </div>
  );
};
