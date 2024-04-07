import './style/base.css';
import SearchController from './search';

const searchController = SearchController();
const workspaceEle = document.getElementById('workspace');

const init = () => {
  workspaceEle.appendChild(searchController.getView());
};

init();
