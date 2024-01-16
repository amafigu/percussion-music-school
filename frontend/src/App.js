import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./AppRoutes";
import { LocaleContextProvider } from "./context/localeContext";

const App = () => {
  return (
    <BrowserRouter>
      <LocaleContextProvider>
        <AppRoutes></AppRoutes>
      </LocaleContextProvider>
    </BrowserRouter>
  );
};

export default App;
