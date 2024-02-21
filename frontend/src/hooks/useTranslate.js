import useLocaleContext from "#context/localeContext";

export const useTranslate = () => {
  const { translate } = useLocaleContext();
  return translate;
};
