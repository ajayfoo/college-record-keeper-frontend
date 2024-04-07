import SearchRegion from './searchRegion';

const SearchView = () => {
  const searchView = document.createElement('div');
  searchView.classList.add('search-view');
  searchView.appendChild(SearchRegion());

  return searchView;
};

export default SearchView;
