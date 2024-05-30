import { createContext, useContext, useState } from "react";

const MenuContext = createContext();

export const MenuProvider = ({ children }) => {
  const [showMobile, setShowMobile] = useState(false);
  const [showLanguages, setShowLanguages] = useState(false);
  const [showCourses, setShowCourses] = useState(false);

  return (
    <MenuContext.Provider
      value={{
        showMobile,
        setShowMobile,
        showLanguages,
        setShowLanguages,
        showCourses,
        setShowCourses,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

export const useMenuContext = () => {
  return useContext(MenuContext);
};
