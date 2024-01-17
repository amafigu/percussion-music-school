import Footer from "#components/Footer";
import Navbar from "#components/Navbar";
import WhatsappButton from "#components/WhatsappButton";
import About from "#pages/About";
import EnsembleCompositionCourses from "#pages/EnsembleCompositionCourses";
import EnsembleCourses from "#pages/EnsembleCourses";
import HandTechniqueCourses from "#pages/HandTechniqueCourses";
import Home from "#pages/Home";
import InitialPage from "#pages/InitialPage";
import MusicalDirectionCourses from "#pages/MusicalDirectionCourses";
import MusicalLanguageCourses from "#pages/MusicalLanguageCourses";
import Pagenotfound from "#pages/Pagenotfound";
import StickTechniqueCourses from "#pages/StickTechniqueCourses";
import { ROUTES } from "#utils/constants";
import { Route, Routes } from "react-router-dom";
import styles from "./appRoutes.module.scss";

const AppRoutes = () => {
  return (
    <div className={styles.appRoutesWrapper}>
      <Navbar />
      <div className={styles.whatsappButtonPosition}>
        <WhatsappButton />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<InitialPage />}>
            <Route path={ROUTES.ABOUT} element={<About />} />
            <Route index element={<Home />} />
            <Route
              path={ROUTES.COURSES.ENSEMBLE}
              element={<EnsembleCourses />}
            />
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
          </Route>
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRoutes;
