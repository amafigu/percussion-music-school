import { translate } from "#__mocks__/translate";
import { useTranslate } from "#hooks/useTranslate";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { MusicalDirectionCourses } from "./index";

jest.mock("#hooks/useTranslate");

describe("Musical direction courses page does", () => {
  test("render title, subtitle and text content", () => {
    window.scrollTo = jest.fn();

    useTranslate.mockReturnValue(translate);
    render(
      <Router>
        <MusicalDirectionCourses />
      </Router>,
    );
    expect(screen.getByText("Musical Direction")).toBeInTheDocument();
    expect(
      screen.getByText("The Expression In Your Hands"),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "This course has the objective of training musical directors. The necessary tools for the development of musical sign language will be provided. (Only those who are taking the 'Ensemble Practice' course can register for this course).",
      ),
    ).toBeInTheDocument();
  });
});
