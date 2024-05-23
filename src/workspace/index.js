import './style.css';
import AddController from './add';
import SearchController from './search';

// const addBtn = document.getElementById('go-to-add');
// const searchBtn = document.getElementById('go-to-search');
//
// const addController = AddController();
// const workspaceEle = document.getElementById('workspace');
//
// const workspaces = [];
//
// const switchWorkspaceTo = (index) => {
//   workspaceEle.replaceChildren(workspaces[index]);
// };
//
// const setupEventListeners = () => {
//   addBtn.addEventListener('click', () => {
//     searchBtn.classList.remove('active');
//     addBtn.classList.add('active');
//     switchWorkspaceTo(0);
//   });
//   searchBtn.addEventListener('click', () => {
//     addBtn.classList.remove('active');
//     searchBtn.classList.add('active');
//     switchWorkspaceTo(1);
//   });
// };
// const init = async () => {
//   const searchController = await SearchController();
//   workspaces.push(addController.getView(), searchController.getView());
//   workspaceEle.appendChild(addController.getView());
//   setupEventListeners();
//   searchBtn.click();
// };

const getNavBar = (switchWorkspaceTo) => {
  const nav = document.createElement('nav');

  const mainActionsButtons = document.createElement('div');
  mainActionsButtons.classList.add('main-action-buttons');

  const addEnfold = document.createElement('div');
  addEnfold.classList.add('enfold');
  addEnfold.id = 'go-to-add';

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add';
  addBtn.addEventListener('click', () => {
    searchBtn.classList.remove('active');
    addBtn.classList.add('active');
    switchWorkspaceTo(0);
  });

  addEnfold.appendChild(addBtn);

  const searchEnfold = document.createElement('div');
  searchEnfold.classList.add('enfold', 'active');
  searchEnfold.id = 'go-to-search';

  const searchBtn = document.createElement('button');
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', () => {
    addBtn.classList.remove('active');
    searchBtn.classList.add('active');
    switchWorkspaceTo(1);
  });

  searchEnfold.appendChild(searchBtn);

  mainActionsButtons.append(addEnfold, searchEnfold);
  nav.append(mainActionsButtons);
  return nav;
};

const getWorkspaceContainer = async () => {
  const container = document.createElement('div');
  container.classList.add('workspace-container');

  const main = document.createElement('main');
  main.id = 'workspace';

  const workspaces = [];
  const switchWorkspaceTo = (index) => {
    main.replaceChildren(workspaces[index]);
  };
  const addController = AddController();
  const searchController = await SearchController();
  workspaces.push(addController.getView(), searchController.getView());
  main.appendChild(addController.getView());
  container.append(getNavBar(switchWorkspaceTo), main);
  return container;
};

export default getWorkspaceContainer;
