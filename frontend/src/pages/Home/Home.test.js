import { translate } from "#__mocks__/translate";
import { useTranslate } from "#hooks/useTranslate";
import "@testing-library/react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Home } from ".";

jest.mock("#hooks/useTranslate");

describe("Home page does", () => {
  test("render school name", () => {
    window.scrollTo = jest.fn();
    useTranslate.mockReturnValue(translate);
    render(
      <Router>
        <Home />
      </Router>,
    );
    expect(screen.getByText("Tierra y Aire")).toBeInTheDocument();
  });
});
