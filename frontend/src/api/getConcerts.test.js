import { concerts } from "#__mocks__/concertsMock";
import axios from "axios";
import { getConcerts } from "./getConcerts";

jest.mock("axios");

describe("getConcerts does", () => {
  test("fetch concerts from API request", async () => {
    axios.get.mockResolvedValue({ status: 200, data: concerts });
    const response = await getConcerts();
    expect(response).toEqual({ status: 200, data: concerts });
  });

  test("throws an error when request fails", async () => {
    const message = "Error by getConcerts";
    axios.get.mockRejectedValue(new Error(message));
    await expect(getConcerts()).rejects.toThrow(message);
  });
});
