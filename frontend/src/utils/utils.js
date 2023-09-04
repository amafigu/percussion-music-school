import { useEffect } from "react";

export const useEffectScrollTop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
};
