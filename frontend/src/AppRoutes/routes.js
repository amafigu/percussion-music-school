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

export const routes = [
  { path: ROUTES.ABOUT, element: <About /> },
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.COURSES.ENSEMBLE, element: <EnsembleCourses /> },
  { path: ROUTES.COURSES.HAND_TECHNIQUE, element: <HandTechniqueCourses /> },
  { path: ROUTES.COURSES.STICK_TECHNIQUE, element: <StickTechniqueCourses /> },
  {
    path: ROUTES.COURSES.MUSICAL_LANGUAGE,
    element: <MusicalLanguageCourses />,
  },
  {
    path: ROUTES.COURSES.MUSICAL_DIRECTION,
    element: <MusicalDirectionCourses />,
  },
  {
    path: ROUTES.COURSES.ENSEMBLE_COMPOSITION,
    element: <EnsembleCompositionCourses />,
  },
  { path: ROUTES.CONCERTS, element: <Concerts /> },
  { path: ROUTES.NOT_FOUND, element: <PageNotFound /> },
];
