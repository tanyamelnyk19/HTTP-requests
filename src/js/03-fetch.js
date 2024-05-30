import '../css/common.css';
import '../css/gallery.css';
const API_KEY = '23192849-392e98e42aea5a2ff7de83472';

const refs = {
    imageContainer: document.querySelector('.image-container'),
};

fetch(`https://pixabay.com/api/?key=${API_KEY}&q=british+cat&colors=grey+blue&orientation=horizontal`)
  .then(response => response.json())
  .then(res => {
        const imageArray = res.hits;
        createMarkup(imageArray);
    })
  .catch(err =>console.log(err))



function createMarkup(arr) {
    const markup = arr.map(img =>`<li><img src="${img.webformatURL}" alt="${img.tags}" /></li>`).join('');
    refs.imageContainer.insertAdjacentHTML('beforeend', markup);
}
