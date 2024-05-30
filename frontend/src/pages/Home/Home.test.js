import { courseCards } from "#__mocks__/courseCards";
import { translate } from "#__mocks__/translate";
import { useCourseCards } from "#hooks/useCourseCards";
import { useTranslate } from "#hooks/useTranslate";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from "./index";

jest.mock("#hooks/useTranslate");
jest.mock("#hooks/useCourseCards");

describe("Home page does", () => {
  test("render school name", () => {
    window.scrollTo = jest.fn();
    useTranslate.mockReturnValue(translate);
    useCourseCards.mockReturnValue(courseCards);
    render(
      <Router>
        <Home />
      </Router>,
    );
    expect(screen.getByText("Tierra y Aire")).toBeInTheDocument();
  });
});
