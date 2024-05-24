import getWorkspaceContainer from './workspace';
import './style.css';
import { canGetLatestStudents } from './utils';
import getLoginContainer from './login';

const launchApp = async () => {
  const startWorkspace = async () => {
    const workspaceContainer = await getWorkspaceContainer();
    document.body.replaceChildren(workspaceContainer);
  };
  try {
    const authorized = await canGetLatestStudents();
    console.log(authorized);
    if (authorized) {
      await startWorkspace();
    } else {
      throw new Error('Not authorized');
    }
  } catch (err) {
    document.body.replaceChildren(getLoginContainer(startWorkspace));
  }
};

launchApp();
