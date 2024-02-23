// Mock window.scrollTo
window.scrollTo = jest.fn();

// eslint-disable-next-line import/first
import "@testing-library/jest-dom/extend-expect";

// polyfill matchMedia caused by react-slick

global.matchMedia =
  global.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
