import getWorkspaceContainer from './workspace';
import './style.css';
import { canGetLatestStudents } from './utils';
import getLoginContainer from './login';

function cookieExists(name) {
  return document.cookie
    .split(';')
    .some((item) => item.trim().startsWith(name + '='));
}

const userIsAuthorized = async () => {
  if (!cookieExists('main')) return false;
  return canGetLatestStudents();
};

const launchApp = async () => {
  try {
    const authorized = await userIsAuthorized();
    console.log(authorized);
    if (authorized) {
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
