import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./AppRoutes";
import { LocaleContextProvider } from "./context/localeContext";

export const App = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <AppRoutes />
      </LocaleContextProvider>
    </BrowserRouter>
  );
};
