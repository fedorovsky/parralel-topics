/**
 * This function will set custom css property '--vh'
 * This is necessary for the correct recognition of the mobile display.
 * https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
 *  .my-element {
      height: 100vh;
      height: calc(var(--vh, 1vh) * 100);
    }
 */

const setProperyVh = () => {
  const setCssVariable = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setCssVariable();

  window.addEventListener('resize', setCssVariable);

  window.addEventListener('orientationchange', setCssVariable);
};

export default setProperyVh;
