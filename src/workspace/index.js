import './style.css';
import AddController from './add';
import SearchController from './search';
import LogoutIconSrc from './images/logout.svg';

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
    console.log('addbtn');
    searchEnfold.classList.remove('active');
    addEnfold.classList.add('active');
    switchWorkspaceTo(0);
  });

  addEnfold.appendChild(addBtn);

  const searchEnfold = document.createElement('div');
  searchEnfold.classList.add('enfold', 'active');
  searchEnfold.id = 'go-to-search';

  const searchBtn = document.createElement('button');
  searchBtn.textContent = 'Search';
  searchBtn.addEventListener('click', () => {
    addEnfold.classList.remove('active');
    searchEnfold.classList.add('active');
    switchWorkspaceTo(1);
  });
  searchBtn.click();

  searchEnfold.appendChild(searchBtn);

  mainActionsButtons.append(addEnfold, searchEnfold);
  nav.append(mainActionsButtons);
  return nav;
};

const getLogoutButton = () => {
  const element = document.createElement('button');
  element.classList.add('logout');
  const icon = document.createElement('img');
  icon.src = LogoutIconSrc;

  const text = document.createElement('span');
  text.textContent = 'Logout';
  element.append(icon, text);
  return element;
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
  container.append(getNavBar(switchWorkspaceTo), main, getLogoutButton());
  return container;
};

export default getWorkspaceContainer;
