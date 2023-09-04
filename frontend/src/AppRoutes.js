import WhatsappButton from "#components/WhatsappButton";
import { Route, Routes } from "react-router-dom";
import styles from "./appRoutes.module.scss";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

const AppRoutes = () => {
  return (
    <div className={styles.appRoutesWrapper}>
      <Navbar />
      <div className={styles.whatsappButtonPosition}>
        <WhatsappButton />
      </div>

      <div className={styles.content}>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default AppRoutes;
