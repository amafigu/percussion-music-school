import { translate } from "#__mocks__/translate";
import { useTranslate } from "#hooks/useTranslate";
import { Concerts } from "#pages/Concerts";
import { render, screen } from "@testing-library/react";

jest.mock("#hooks/useTranslate");
describe("concerts page does", () => {
  beforeEach(() => {
    useTranslate.mockReturnValue(translate);
  });
  test("render title", () => {
    render(<Concerts />);
    expect(screen.getByText("Concerts")).toBeInTheDocument();
  });
});
