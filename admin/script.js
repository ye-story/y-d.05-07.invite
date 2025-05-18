const names = [
  { id: "0", names: "Общее" },
  { id: "1", names: "Бабушка" },
  { id: "2", names: "Тетя Наташа и Юля" },
  { id: "3", names: "Катя и Виталик" },
  { id: "4", names: "Ира и Артем" },
  { id: "5", names: "Оксана и Дима" },
  { id: "6", names: "Алла и Антон" },
  { id: "7", names: "Оля и Алексей" },
  { id: "8", names: "Евгения" },
  { id: "9", names: "Евгения и Максим" },
  { id: "10", names: "Анастасия и Никита" },
  { id: "11", names: "Алексей и Жанна" },
  { id: "12", names: "Лена" },
  { id: "13", names: "Антонина и Александр" },
  { id: "14", names: "Алексей и Полина" },
  { id: "15", names: "Антон и Анна" },
  { id: "16", names: "Иван и Ирина" },
  { id: "17", names: "Шота" },
  { id: "18", names: "Василий" },
  { id: "19", names: "Мама и папа" }
];

const baseURL = location.href.replace('admin/', ''); //location.origin
const container = document.getElementById('container');

names.forEach((name, index) => {
  const nameElem = document.createElement('div');
  nameElem.classList.add('name');
  const titleNameElem = document.createElement('p');
  titleNameElem.classList.add('name__title');
  titleNameElem.innerHTML = name.names;
  const linkNameElem = document.createElement('a');
  linkNameElem.classList.add('name__link');

  const link = `${baseURL}?id=${name.id}`;
  linkNameElem.href = link;
  linkNameElem.innerHTML = link;
  linkNameElem.target = '_blank';

  const btnCopyLink = document.createElement('button');
  btnCopyLink.innerHTML = 'copy';
  btnCopyLink.classList.add('name__btn-copy');
  btnCopyLink.dataset.link = link;

  const btnShareViber = document.createElement('a');
  btnShareViber.classList.add('name__btn-share-viber');
  btnShareViber.href = 'viber://forward?text=' + link;
  btnShareViber.target = '_blank';

  const btnShareTelegram = document.createElement('a');
  btnShareTelegram.classList.add('name__btn-share-telegram');
  btnShareTelegram.href = `https://telegram.me/share/url?url=${link}&amp;text=${link}`;
  btnShareTelegram.target = '_blank';

  const linkWrapper = document.createElement('div');
  linkWrapper.classList.add('name__link-wrapper');

  linkWrapper.append(
    linkNameElem,
    btnCopyLink,
    btnShareViber,
    btnShareTelegram
  );

  nameElem.append(titleNameElem, linkWrapper);

  container.append(nameElem);
});

container.addEventListener('click', (e) => {
  const btnCopy = e.target;

  if (btnCopy.classList.contains('name__btn-copy')) {
    const linkUrl = btnCopy.dataset.link;
    console.log(linkUrl);
    navigator.clipboard
      .writeText(linkUrl)
      .then(() => {
        console.log('Text copied to clipboard ' + linkUrl);
        btnCopy.innerHTML = 'copied';

        setTimeout(() => {
          btnCopy.innerHTML = 'copy';
        }, 5000);
      })
      .catch((err) => {
        console.error('Error in copying text: ', err);
      });
  }
});
