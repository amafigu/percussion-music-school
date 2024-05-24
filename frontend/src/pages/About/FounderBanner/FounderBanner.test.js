import {
  founderDescriptionFirst,
  founderDescriptionSecond,
} from "#__mocks__/longText";
import { translate } from "#__mocks__/translate";
import { facebookUrl, instagramUrl, youtubeUrl } from "#constants/midia";
import { useTranslate } from "#hooks/useTranslate";
import { render, screen } from "@testing-library/react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FounderBanner } from "./index";

function renderFounderBanner() {
  render(
    <Router>
      <FounderBanner />
    </Router>,
  );
}

jest.mock("#hooks/useTranslate");

describe("<FounderBanner /> does", () => {
  beforeEach(() => {
    useTranslate.mockReturnValue(translate);
  });

  test("render founder name, title and text correctly", () => {
    renderFounderBanner();
    expect(screen.getByText("Rolo Veron")).toBeInTheDocument();
    expect(
      screen.getByText("Founder and Managing Director"),
    ).toBeInTheDocument();
    expect(screen.getByText(founderDescriptionFirst)).toBeInTheDocument();
    expect(screen.getByText(founderDescriptionSecond)).toBeInTheDocument();
  });

  test("has correct instagram path in 'to' property in the <Link>", () => {
    render(
      <Router>
        <Link
          to={instagramUrl}
          target='_blank'
          rel='noopener noreferrer'
        ></Link>
      </Router>,
    );

    expect(screen.getByRole("link")).toHaveProperty("href", instagramUrl);
  });

  test("has correct facebook path in 'to' property in the <Link>", () => {
    render(
      <Router>
        <Link to={facebookUrl} target='_blank' rel='noopener noreferrer'></Link>
      </Router>,
    );

    expect(screen.getByRole("link")).toHaveProperty("href", facebookUrl);
  });

  test("has correct youtube path in 'to' property in the <Link>", () => {
    render(
      <Router>
        <Link to={youtubeUrl} target='_blank' rel='noopener noreferrer'></Link>
      </Router>,
    );

    expect(screen.getByRole("link")).toHaveProperty("href", youtubeUrl);
  });
});
