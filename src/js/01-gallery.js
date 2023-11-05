// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const galleryList = document.querySelector('.gallery');


const gallery = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
    `
}).join('');

galleryList.insertAdjacentHTML('beforeend', gallery);

var lightbox = new SimpleLightbox('.gallery a', { captions: true, captionPosition: 'bottom', captionDelay: 250, captionsData: 'alt' });
