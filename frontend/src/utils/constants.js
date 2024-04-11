export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  COURSES: {
    ENSEMBLE: "/courses/ensemble",
    ENSEMBLE_COMPOSITION: "/courses/ensemble-composition",
    HAND_TECHNIQUE: "/courses/hand-technique",
    MUSICAL_DIRECTION: "/courses/musical-direction",
    MUSICAL_LANGUAGE: "/courses/musical-language",
    STICK_TECHNIQUE: "/courses/stick-technique",
  },
};

export const TESTIMONIALS = [
  {
    person: "mikeTiseyra",
    image: "mikeTiseyra.jpg",
  },
  {
    person: "silvinaRaquel",
    image: "silvinaRaquel.jpg",
  },
  {
    person: "luisa",
    image: "luisa.jpg",
  },
  {
    person: "mumi",
    image: "mumi.jpg",
  },
  {
    person: "marito",
    image: "marito.jpg",
  },
  {
    person: "carlitos",
    image: "carlitos.jpg",
  },
  {
    person: "cheliCastellano",
    image: "cheliCastellano.jpg",
  },
  {
    person: "silvinaPesaresi",
    image: "silvinaPesaresi.jpg",
  },
  {
    person: "flavia",
    image: "flavia.jpg",
  },

  {
    person: "lilianaMartinez",
    image: "lilianaMartinez.jpg",
  },
];

export const aboutPageUpperSectionBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/banner_about.png)`,
};

export const aboutPagePhilosophySectionBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_page_philosophy_desktop.png)`,
};

export const educationBanner = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/about_page_school.png)`,
};

export const ensembleCoursesPageUpperSectionBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/regular_courses_page_upper_section_background.png)`,
};

export const musicalLanguageCoursesPageUpperSectionBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/short_courses_page_upper_section_background.png)`,
};

export const stickTechniqueCoursesPageUpperSectionBackground = {
  backgroundImage: `url(${process.env.PUBLIC_URL}/assets/corporate_courses_page_upper_section_background.png)`,
};

// TEXT TO PLACE IN I18N

export const coursesPagesNavigationItems = [
  { name: "ensemble", ref: ROUTES.COURSES.ENSEMBLE },
  { name: "handTechnique", ref: ROUTES.COURSES.HAND_TECHNIQUE },
  { name: "stickTechnique", ref: ROUTES.COURSES.STICK_TECHNIQUE },
  { name: "musicalLanguage", ref: ROUTES.COURSES.MUSICAL_LANGUAGE },
  { name: "musicalDirection", ref: ROUTES.COURSES.MUSICAL_DIRECTION },
  {
    name: "ensembleComposition",
    ref: ROUTES.COURSES.ENSEMBLE_COMPOSITION,
  },
];

export const ensembleCoursesPageBeginnerBannerImage = `${process.env.PUBLIC_URL}/assets/regular_courses_page_beginner.png`;

export const regularCoursePageBeginnerBannerName = "Junior";
export const regularCoursePageBeginnerBannerSubtitle = "Coordination & Control";
export const regularCoursePageBeginnerBannerText =
  "For every young drummer, it's important to acquire appropriate development and control techniques to achieve mastery over the drum set.";

export const ensembleCoursesPageIntermediateBannerImage = `${process.env.PUBLIC_URL}/assets/regular_courses_page_intermediate.png`;

export const regularCoursePageIntermediateBannerName = "Intermediate";
export const regularCoursePageIntermediateBannerSubtitle =
  "Coordination & Control";
export const regularCoursePageIntermediateBannerText =
  "Every young drummer needs proper development and control techniques. The child will begin to attain control over the drum set by exploring";

export const ensembleCoursesPageAdvancedBannerImage = `${process.env.PUBLIC_URL}/assets/regular_courses_page_advanced.png`;

export const regularCoursePageAdvancedBannerName = "Advanced";
export const regularCoursePageAdvancedBannerSubtitle = "Coordination & Control";
export const regularCoursePageAdvancedBannerText =
  "Every experienced drummer needs more techniques. The student will begin to attain control over the drum set by exploring";

export const handTechniqueCoursePageSecondImage = `${process.env.PUBLIC_URL}/assets/short_courses_page_holiday.png`;

export const shortCoursePageHolidayName = "Holiday Programme";
export const shortCoursePageHolidaySubtitle =
  "The School Holidays are round the corner!";
export const shortCoursePageHolidayText =
  "Every young drummer needs proper development and control techniques";

export const musicalLanguageCoursePageImage = `${process.env.PUBLIC_URL}/assets/short_courses_page_intro_drumming.png`;

export const shortCoursePageIntroDrummingName = "Introduction to Drumming";
export const shortCoursePageIntroDrummingSubtitle =
  "We have developed ‘Intro to Drumming’ for adults and students who have a limited time but want to get the most out of it.";
export const shortCoursePageIntroDrummingText =
  "PONELE ALGO COMO ESTA EN TEXT ANTERIOR ROLO n 4 lessons, students with little or no drumming experience will be rapidly introduced to the drum kit.Intro to Drumming is extremely beneficial for adults who are new beginners to drumming, and who are looking for a quick “crash course” introduction to the instrument.This course is also a great option for students to have-a-go at the instrument for 4 lessons before committing to a regular weekly slot.The Educator and student will plan 4 lessons at any time during a 1 month period (or 8 lessons within 2 months), subject to availability. Lessons can be more than once a week, and no student deposit is required. Students are allowed to take this short course more than once.";

export const stickTechniqueCoursePageOfferImage = `${process.env.PUBLIC_URL}/assets/corporate_courses_offer.png`;

export const corporateCoursePageOfferName = "Overview";
export const corporateCoursePageOfferSubtitle =
  "Are you looking for a unique and effective way to bring your team together and improve communication and teamwork? ";
export const corporateCoursePageOfferText =
  "Our experienced instructors are committed to providing your team with a positive and engaging experience that will leave them eager for more. We’ve worked with numerous organizations and over 5,000 students, making us well-versed in adapting to cultural, racial, and language differences.  Through the power of drumming, we can help bring your team together and provide a professional development opportunity unlike any other. Don’t miss out on this chance to boost team morale and productivity. Contact us today to book your course!";
