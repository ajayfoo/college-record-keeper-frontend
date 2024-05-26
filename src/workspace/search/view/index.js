import SearchRegion from './searchRegion';
import SearchResult from './searchResult';

const SearchView = async () => {
  const searchView = document.createElement('div');
  searchView.classList.add('search-view');
  const searchRegion = await SearchRegion();
  const searchResult = await SearchResult();
  searchView.append(searchRegion, searchResult);

  return searchView;
};

export default SearchView;
