import { useNavigate } from "react-router-dom";

export const useOnNavigate = () => {
  const navigate = useNavigate();

  const onNavigate = (setters, route) => {
    setters.forEach((setter) => setter(false));
    navigate(route);
  };

  return { onNavigate };
};
