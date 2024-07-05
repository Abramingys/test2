document.addEventListener('DOMContentLoaded', () => {
  new Mmenu('#menu', {
    navbar: {
      add: false,
    },

    offCanvas: {
      position: 'right-front',
    },
    slidingSubmenus: false,
  });
});
