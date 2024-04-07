import SearchView from './view';

const SearchController = () => {
  const searchView = SearchView();
  const getView = () => searchView;
  return { getView };
};

export default SearchController;
