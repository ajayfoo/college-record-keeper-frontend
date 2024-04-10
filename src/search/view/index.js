import SearchRegion from './searchRegion';
import SearchResult from './searchResult';

const SearchView = () => {
  const searchView = document.createElement('div');
  searchView.classList.add('search-view');
  searchView.append(SearchRegion(), SearchResult());

  return searchView;
};

export default SearchView;
