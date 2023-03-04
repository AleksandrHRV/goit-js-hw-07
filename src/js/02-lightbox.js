import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

//=========================================================================================================================================
const galleryEl = document.querySelector(".gallery");
function createGalleryItem(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${preview}"><img class="gallery__image" src="${original}" alt="${description}" title=""/></a>
        </li>`;
    })
    .join("");

}
const addGalleryItem = createGalleryItem(galleryItems);
galleryEl.insertAdjacentHTML("beforeend", addGalleryItem);
//=========================================================================================================================================
var lightbox = new SimpleLightbox(".gallery .gallery__link", {
    captionPosition: 'bottom',
    captionsData: 'alt',
    captionDelay: 250,
    close: false,
    enableKeyboard: true,
  });