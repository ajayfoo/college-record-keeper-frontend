import SearchRegion from './searchRegion';
import SearchResult from './searchResult';

const SearchView = async () => {
  const searchView = document.createElement('div');
  searchView.classList.add('search-view');
  const searchResult = await SearchResult();
  searchView.append(SearchRegion(), searchResult);

  return searchView;
};

export default SearchView;
