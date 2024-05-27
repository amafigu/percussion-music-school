import { translate } from "#__mocks__/translate";
import { musicalLanguageBackground } from "#constants/backgroundImages";
import { musicalLanguageCourses } from "#constants/images";
import { useTranslate } from "#hooks/useTranslate";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MusicalLanguageCourses } from "./index";

jest.mock("#hooks/useTranslate");

function renderComponent() {
  render(
    <Router>
      <MusicalLanguageCourses />
    </Router>,
  );
}

describe("Musical language courses page does", () => {
  beforeEach(() => {
    window.scrollTo = jest.fn();
    window.scrollTo = jest.fn();
    useTranslate.mockReturnValue(translate);
  });
  test("render title, subtitle and text content", () => {
    renderComponent();

    expect(screen.getByText("Musical Language")).toBeInTheDocument();
    expect(screen.getByText("Ensemble practice")).toBeInTheDocument();
    expect(
      screen.getByText(
        "In this course we will work on musical notation and its values, that is, we will learn to read and write music, emphasizing rhythm.",
      ),
    ).toBeInTheDocument();
  });
  test("contains background and section images", () => {
    renderComponent();

    const sectionBackgroundImage = screen.getByLabelText("background");
    const sectionImage = screen.getByAltText("course banner");

    expect(sectionBackgroundImage).toHaveStyle(
      `background-image:url(${process.env.PUBLIC_URL}${musicalLanguageBackground})`,
    );
    expect(sectionImage).toHaveProperty(
      "src",
      `http://localhost/undefined${musicalLanguageCourses}`,
    );
  });
});
