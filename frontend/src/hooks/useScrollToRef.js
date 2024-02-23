export const useScrollToRef = () => {
  const scrollToRef = (ref) => {
    const element = ref.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return scrollToRef;
};
