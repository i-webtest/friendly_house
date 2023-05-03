const tabsList = document.querySelector('.hero__list');
const tabsItem = document.querySelectorAll('.hero__item');
const backgroundContainer = document.querySelector('.hero__container');

let num = 0;

const tabBtn = () => {
  let arr = '';

  tabsItem.forEach((item) => {
    if (item.classList.contains('hero__item-active')) {
      arr = item;
    }
  });

  if (arr !== '') {
    return arr;
  }

  return;
};

const background = (item) => {
  const li = tabBtn();
  const petsName = item.querySelector('.hero__figcaption').textContent;
  const bg = item.dataset.bg;
  const titleName = document.querySelector('.hero__title-name');

  if (tabBtn() !== undefined) {
    num += 1;
    li.style.order = `${num}`;
    li.classList.remove('hero__item-active');
  }

  item.classList.add('hero__item-active');
  titleName.textContent = petsName;
  backgroundContainer.style.backgroundImage = `url('${bg}')`;
};

tabsList.addEventListener('click', (event) => {
  const target = event.target;

  if (target.closest('.hero__item')) background(target.closest('.hero__item'));
});
