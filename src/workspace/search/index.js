import SearchView from './view';

const SearchController = async () => {
  const searchView = await SearchView();
  const getView = () => searchView;
  return { getView };
};

export default SearchController;
