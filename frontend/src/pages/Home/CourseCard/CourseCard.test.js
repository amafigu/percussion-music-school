import { translate } from "#__mocks__/translate";
import { useTranslate } from "#hooks/useTranslate";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import CourseCard from "./CourseCard";

jest.mock("#hooks/useTranslate");

describe("CourseCard", () => {
  beforeEach(() => {
    useTranslate.mockReturnValue(translate);
  });

  test('renders "see more" link text', () => {
    const props = {
      name: "testCourse",
      description: "testDescription",
      path: "/test-path",
      image: "testImage.jpg",
    };

    render(
      <Router>
        <CourseCard {...props} />
      </Router>,
    );

    const linkElement = screen.getByText("See More");
    expect(linkElement).toBeInTheDocument();
  });
});
