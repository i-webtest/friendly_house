export const burgerMenu = () => {
  const menuBtn = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation');
  const navigationLinks = navigation.querySelectorAll('.navigation__link');
  const body = document.querySelector('body');

  const handleMenu = () => {
    menuBtn.classList.toggle('active');
    navigation.classList.toggle('active');
    body.classList.toggle('lock');
  };

  const closeMenu = () => {
    menuBtn.classList.remove('active');
    navigation.classList.remove('active');
    body.classList.remove('active');
  };

  menuBtn.addEventListener('click', handleMenu);

  // body.addEventListener('click', (e) => {
  //   const target = e.target;
  //   console.log('target: ', target);
  //   if (!target.closest('.navigation') && target.closest('.burger')) {
  //     closeMenu();
  //   }
  // });

  navigationLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      handleMenu();

      let href = e.target.getAttribute('href').substring(1);

      const scrollTarget = document.getElementById(href);

      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  });
};
