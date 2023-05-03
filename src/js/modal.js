const scrollController = {
  scrollPosition: 0,
  disabledScroll() {
    scrollController.scrollPosition = window.scrollY;
    document.body.style.cssText = `
      overflow: hidden;
      position: fixed;
      top: -${scrollController.scrollPosition}px;
      left:0;
      height: 100vh;
      width: 100vw;
      padding-right: ${window.innerWidth - document.body.offsetWidth}px;
    `;
    document.documentElement.style.scrollBehavior = 'unset';
  },

  enabledScroll() {
    document.body.style.cssText = '';
    window.scroll({ top: scrollController.scrollPosition });
    document.documentElement.style.scrollBehavior = '';
  },
};

const overlay = $('.modal');
const modal = $('.modal__main');
const modalBtn = $('.order');
const modalClose = $('.modal__close');

const openModal = () => {
  overlay.show(500);
  scrollController.disabledScroll();
};

const closeModal = () => {
  overlay.hide(500);
  scrollController.enabledScroll();
};

modalBtn.click(function () {
  openModal();
});

modalClose.click(function () {
  closeModal();
});

overlay.click(function (e) {
  if (!($(e.target).parents('.modal__main').length || $(e.target).hasClass('modal__main'))) {
    closeModal();
  }
});

$(document).on('keyup', function (e) {
  if (e.key == 'Escape') {
    closeModal();
  }
});
