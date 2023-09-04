import WhatsappButton from "#components/WhatsappButton";
import { Route, Routes } from "react-router-dom";
import styles from "./appRoutes.module.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import InitialPage from "./pages/InitialPage";

import Pagenotfound from "./pages/Pagenotfound";
const AppRoutes = () => {
  return (
    <div className={styles.appRoutesWrapper}>
      <Navbar />
      <div className={styles.whatsappButtonPosition}>
        <WhatsappButton />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<InitialPage />}>
            <Route path='/about' element={<About />} />
            <Route index element={<Home />} />
          </Route>
          <Route path='*' element={<Pagenotfound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRoutes;
