import { Footer } from "#components/Footer";
import { Navbar } from "#components/Navbar";
import { WhatsAppButton } from "#components/ui/WhatsAppButton";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

export const AppRoutes = () => {
  return (
    <>
      <Navbar />
      <WhatsAppButton />
      <Routes>
        {routes.map(({ path, element }, index) => (
          <Route key={index} path={path} element={element} />
        ))}
      </Routes>
      <Footer />
    </>
  );
};
