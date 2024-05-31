import '../css/pagination.css';
import NewsApiService from './news-service';
import articlesTpl from '../templates/articles.hbs';
import LoadMoreBtn from './components/load-more-btn';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articlesContainer: document.querySelector('.js-articles-container'),
};

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.refs.button.addEventListener('click', fetchArticles);

function onSearch(e) {
  e.preventDefault();

  const form = e.currentTarget;
  newsApiService.query = form.elements.query.value;

  if (newsApiService.query.trim() === '') {
    form.reset();
    return alert('Введи что-то нормальное');
  }

  newsApiService.resetPage();
  loadMoreBtn.show();
  clearArticlesContainer();
  fetchArticles();

  form.reset();
}

function fetchArticles() {
  loadMoreBtn.disable();

  newsApiService.fetchArticles().then(articles => {
    appendArticlesMarkup(articles);
    loadMoreBtn.enable();
  });
}

function appendArticlesMarkup(articles) {
  refs.articlesContainer.insertAdjacentHTML('beforeend', articlesTpl(articles));
}

function clearArticlesContainer() {
  refs.articlesContainer.innerHTML = '';
}
