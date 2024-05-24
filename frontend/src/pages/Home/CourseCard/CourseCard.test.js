import { translate } from "#__mocks__/translate";
import { useTranslate } from "#hooks/useTranslate";
import { MusicalLanguageCourses } from "#pages/MusicalLanguageCourses";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  Link,
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import { CourseCard } from "./index";

jest.mock("#hooks/useTranslate");

describe("CourseCard", () => {
  window.scrollTo = jest.fn();
  test('has "see more" link', () => {
    useTranslate.mockReturnValue(translate);
    const props = {
      name: "name",
      description: "description",
      path: "path",
      image: "image",
    };

    render(
      <Router>
        <CourseCard {...props} />
      </Router>,
    );

    const linkElement = screen.getByText("See More");
    expect(linkElement).toBeInTheDocument();
  });

  test("has correct children and 'to' property", () => {
    render(
      <Router>
        <Link to='/courses/musical-language'>See More</Link>
      </Router>,
    );

    expect(screen.getByRole("link")).toHaveTextContent("See More");
    expect(screen.getByRole("link")).toHaveProperty(
      "href",
      "http://localhost/courses/musical-language",
    );
  });

  test("navigates to the musical language page on link click", async () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route
            path='/'
            element={
              <CourseCard
                image='card1.png'
                name='musicalLanguage'
                path='/courses/musical-language'
                description='Learn the language of music.'
              />
            }
          />
          <Route
            path='/courses/musical-language'
            element={<MusicalLanguageCourses />}
          />
        </Routes>
      </MemoryRouter>,
    );

    const linkElement = screen.getByText("See More");
    fireEvent.click(linkElement);

    expect(screen.getByText("Musical Language")).toBeInTheDocument();
    expect(screen.getByText("Understand Music")).toBeInTheDocument();
  });
});
