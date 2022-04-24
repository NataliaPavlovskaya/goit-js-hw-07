import { galleryItems } from './gallery-items.js';

// 1.Создание и рендер разметки по массиву данных galleryItems и предоставленному шаблону элемента галереи. Используй готовый код из первого задания.


const galleryEl = document.querySelector('.gallery');

function createImageGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <a class="gallery__item" 
      href="${original}">
      <img class="gallery__image" 
      src="${preview}" 
      alt="${description}" 
      title="Beautiful Image!"
      />
    </a>`;
    })
    .join('');
};
galleryEl.insertAdjacentHTML('beforeend', createImageGallery(galleryItems));


galleryEl.addEventListener('click', onGalleryClick );

function onGalleryClick (event){
  event.preventDefault();

    const isImagesEl = event.target.classList.contains('gallery__image');
  if (!isImagesEl) {
    return;
  }
  const largeImgLink = event.target.dataset.source;

let gallery = new SimpleLightbox ('.gallery a', {captionDelay: 250});
}

console.log(galleryItems);