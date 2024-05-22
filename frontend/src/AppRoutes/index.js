import { Footer } from "#components/Footer";
import { Navbar } from "#components/Navbar";
import { WhatsAppButton } from "#components/ui/WhatsAppButton";
import { ROUTES } from "#constants/routes";
import { About } from "#pages/About";
import { Concerts } from "#pages/Concerts";
import { EnsembleCompositionCourses } from "#pages/EnsembleCompositionCourses";
import { EnsembleCourses } from "#pages/EnsembleCourses";
import { HandTechniqueCourses } from "#pages/HandTechniqueCourses";
import { Home } from "#pages/Home";
import { MusicalDirectionCourses } from "#pages/MusicalDirectionCourses";
import { MusicalLanguageCourses } from "#pages/MusicalLanguageCourses";
import { PageNotFound } from "#pages/PageNotFound";
import { StickTechniqueCourses } from "#pages/StickTechniqueCourses";
import { Route, Routes } from "react-router-dom";
import styles from "./appRoutes.module.scss";

export const AppRoutes = () => {
  return (
    <div className={styles.appRoutesWrapper}>
      <Navbar />
      <div className={styles.whatsappButton}>
        <WhatsAppButton />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path={ROUTES.ABOUT} element={<About />} />
          <Route path='/' element={<Home />} />
          <Route path={ROUTES.COURSES.ENSEMBLE} element={<EnsembleCourses />} />
          <Route
            path={ROUTES.COURSES.HAND_TECHNIQUE}
            element={<HandTechniqueCourses />}
          />
          <Route
            path={ROUTES.COURSES.STICK_TECHNIQUE}
            element={<StickTechniqueCourses />}
          />
          <Route
            path={ROUTES.COURSES.MUSICAL_LANGUAGE}
            element={<MusicalLanguageCourses />}
          />
          <Route
            path={ROUTES.COURSES.MUSICAL_DIRECTION}
            element={<MusicalDirectionCourses />}
          />
          <Route
            path={ROUTES.COURSES.ENSEMBLE_COMPOSITION}
            element={<EnsembleCompositionCourses />}
          />
          <Route path={ROUTES.CONCERTS} element={<Concerts />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
