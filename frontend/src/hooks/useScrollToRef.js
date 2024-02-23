export const useScrollToRef = (ref) => {
  const scrollToRef = (ref) => {
    const element = ref.current;
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return scrollToRef;
};
