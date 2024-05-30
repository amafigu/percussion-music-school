import { MenuProvider } from "#context/menuContext";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { LocaleContextProvider } from "./context/localeContext";

export const App = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <MenuProvider>
          <AppRoutes />
        </MenuProvider>
      </LocaleContextProvider>
    </BrowserRouter>
  );
};
