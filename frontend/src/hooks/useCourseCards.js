import { firstCard, secondCard, thirdCard } from "#constants/images";
import { ROUTES } from "#constants/routes";
import { useTranslate } from "#hooks/useTranslate";

export const useCourseCards = () => {
  const translate = useTranslate();
  const textCards = translate.components.courseCards.cards;
  const ROUTE = ROUTES.COURSES;
  const { courseCards } = [
    {
      image: firstCard,
      name: textCards.ensemble.title,
      path: ROUTE.ENSEMBLE,
      description: textCards.ensemble.description,
    },
    {
      image: secondCard,
      name: textCards.handTechnique.title,
      path: ROUTE.HAND_TECHNIQUE,
      description: textCards.handTechnique.description,
    },
    {
      image: thirdCard,
      name: textCards.stickTechnique.title,
      path: ROUTE.STICK_TECHNIQUE,
      description: textCards.stickTechnique.description,
    },
    {
      image: firstCard,
      name: textCards.musicalLanguage.title,
      path: ROUTE.MUSICAL_LANGUAGE,
      description: textCards.musicalLanguage.description,
    },
    {
      image: secondCard,
      name: textCards.musicalDirection.title,
      path: ROUTE.MUSICAL_DIRECTION,
      description: textCards.musicalDirection.description,
    },
    {
      image: thirdCard,
      name: textCards.ensembleComposition.title,
      path: ROUTE.ENSEMBLE_COMPOSITION,
      description: textCards.ensembleComposition.description,
    },
  ];

  return { courseCards };
};
