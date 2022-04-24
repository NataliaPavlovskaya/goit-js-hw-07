// Выполняй это задание в файлах 01-gallery.html и 01-gallery.js.
//  Разбей его на несколько подзадач:

//

// 3.Подключение скрипта и стилей библиотеки модального окна basicLightbox. Используй CDN сервис jsdelivr и добавь в проект ссылки на минифицированные (.min) файлы библиотеки.
// 
// 5.Замена значения атрибута src элемента <img> в модальном окне перед открытием. Используй готовую разметку модального окна с изображением из примеров библиотеки basicLightbox.


import { galleryItems } from './gallery-items.js';

const galleryEl = document.querySelector('.gallery');

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи.

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
    <a class="gallery__link" href="large-image.jpg">
    <img
    class="gallery__image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
    />
    </a>
    </div>`;
    })
    .join('');
}
galleryEl.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));

// 2.Реализация делегирования на div.gallery и получение url большого изображения.

galleryEl.addEventListener('click', onOpenLargeImg);
function onOpenLargeImg(event) {
    event.preventDefault();

    const isImagesEl = event.target.classList.contains('gallery__image');
  if (!isImagesEl) {
    return;
  }
  
    const largeImgLink = event.target.dataset.source;


    const instance = basicLightbox.create(`
  <img 
  src="${largeImgLink}" 
  alt="${event.target.alt}">
  `);
  instance.show();
};


console.log(galleryItems);
