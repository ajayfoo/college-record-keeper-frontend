import getWorkspaceContainer from './workspace';
import './style.css';
import { canGetLatestStudents } from './utils';
import getLoginContainer from './login';

function cookieExists(name) {
  console.log(document.cookie + ' is cookie');
  return document.cookie
    .split(';')
    .some((item) => item.trim().startsWith(name + '='));
}

const userIsAuthorized = async () => {
  console.log(cookieExists('main') + ' cookie?');
  if (!cookieExists('main')) return false;
  return canGetLatestStudents();
};

const launchApp = async () => {
  try {
    const authorized = await userIsAuthorized();
    console.log(authorized);
    if (true) {
      const workspaceContainer = await getWorkspaceContainer();
      document.body.replaceChildren(workspaceContainer);
    } else {
      throw new Error('Not authorized');
    }
  } catch (err) {
    document.body.replaceChildren(getLoginContainer());
  }
};

launchApp();
