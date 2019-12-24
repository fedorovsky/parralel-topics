// https://css-tricks.com/the-trick-to-viewport-units-on-mobile/
const setProperyVh = () => {
  const setVh = () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  setVh();

  window.addEventListener('resize', setVh);

  window.addEventListener('orientationchange', setVh);
};

export default setProperyVh;
