import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes.js";
import About from "./pages/About.js";
import InitialPage from "./pages/InitialPage.js";

describe("Routes", () => {
  test("Should render the main route", () => {
    render(<AppRoutes />, { wrapper: BrowserRouter });
    const greetings = screen.getByText("Tierra y Aire");
    expect(greetings).toBeInTheDocument();
  });

  test("Should render about route", () => {
    const route = "/about";
    render(
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path='/' element={<InitialPage />}>
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </MemoryRouter>,
    );

    const about = screen.getByText("About Tierra y Aire");
    expect(about).toHaveTextContent("About Tierra y Aire");
  });
});
