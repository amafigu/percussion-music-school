// Mock window.scrollTo
window.scrollTo = jest.fn();

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
