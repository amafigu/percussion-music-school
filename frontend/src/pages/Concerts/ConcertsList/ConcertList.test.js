import { concertsMock } from "#__mocks__/concertsMock.js";
import { translate } from "#__mocks__/translate";
import { getConcerts } from "#api/getConcerts";
import { useTranslate } from "#hooks/useTranslate";
import { ConcertsList } from "#pages/Concerts/ConcertsList";
import { titleCase } from "#utils/utils";
import { render, screen, waitFor } from "@testing-library/react";
import React from "react";

jest.mock("#api/getConcerts");
jest.mock("#hooks/useTranslate");

describe("ConcertsList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    useTranslate.mockReturnValue(translate);
  });

  test("fetches and displays concerts on success", async () => {
    getConcerts.mockResolvedValue({ status: 200, data: concertsMock });

    render(<ConcertsList />);

    await waitFor(() => {
      concertsMock.forEach((concert) => {
        const expectedVenue = titleCase(concert.venue);
        const expectedCityCountry = `${concert.city}, ${concert.country}`;
        const expectedDate = new Date(concert.concertDate).toLocaleDateString();

        expect(screen.getByText(expectedVenue)).toBeInTheDocument();
        expect(screen.getByText(expectedCityCountry)).toBeInTheDocument();
        expect(screen.getByText(expectedDate)).toBeInTheDocument();
      });
    });
  });
});
