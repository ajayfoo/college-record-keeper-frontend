import './style.css';
import AddController from './add';
import SearchController from './search';

const addBtn = document.getElementById('go-to-add');
const searchBtn = document.getElementById('go-to-search');

const addController = AddController();
const workspaceEle = document.getElementById('workspace');

const workspaces = [];

const switchWorkspaceTo = (index) => {
  workspaceEle.replaceChildren(workspaces[index]);
};

const setupEventListeners = () => {
  addBtn.addEventListener('click', () => {
    searchBtn.classList.remove('active');
    addBtn.classList.add('active');
    switchWorkspaceTo(0);
  });
  searchBtn.addEventListener('click', () => {
    addBtn.classList.remove('active');
    searchBtn.classList.add('active');
    switchWorkspaceTo(1);
  });
};
const init = async () => {
  const searchController = await SearchController();
  workspaces.push(addController.getView(), searchController.getView());
  workspaceEle.appendChild(addController.getView());
  setupEventListeners();
  searchBtn.click();
};

export default init;
