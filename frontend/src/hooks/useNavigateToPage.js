import { useNavigate } from "react-router-dom";

export const useNavigateToPage = () => {
  const navigate = useNavigate();
  const navigateTo = (route) => navigate(route);
  return navigateTo;
};
