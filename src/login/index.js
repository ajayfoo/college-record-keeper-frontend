import { Field, SubmitMainFormButton } from '../components';
import './style.css';

const login = async (data, url) => {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response;
};

const getLoginError = () => {
  const element = document.createElement('p');
  element.classList.add('login-error');
  element.textContent = 'placeholder';

  const getElement = () => element;
  const show = () => element.classList.add('shown');
  const hide = () => element.classList.remove('shown');
  const showCantAccessInternet = () => {
    element.textContent = "Can't access the Internet";
    show();
  };
  const showInvalidCredentials = () => {
    element.textContent = 'Invalid Credentials';
    show();
  };

  const showSomethingWentWrong = () => {
    element.textContent = 'Something went wrong';
    show();
  };

  return {
    getElement,
    showCantAccessInternet,
    showInvalidCredentials,
    hide,
    showSomethingWentWrong,
  };
};

const getLoginContainer = (startWorkspace) => {
  const container = document.createElement('div');
  container.classList.add('login-container');

  const box = document.createElement('div');
  box.classList.add('login-box');

  const LOGIN_URL = process.env.BACKEND_URL + '/login?useCookies=true';
  const form = document.createElement('form');
  form.id = 'login-form';
  form.action = LOGIN_URL;
  form.method = 'post';
  const formId = 'login-form';
  const ID_PREFIX = formId + '-';
  const fields = [
    Field('Email ID', {
      id: ID_PREFIX + 'email-id',
      required: true,
      type: 'text',
      name: 'email',
      autocomplete: true,
    }),
    Field('Password', {
      id: ID_PREFIX + 'password-id',
      required: true,
      name: 'password',
      type: 'password',
      autocomplete: true,
    }),
  ];

  fields.forEach((field) => form.append(field));

  const loginError = getLoginError();
  form.append(loginError.getElement());
  form.append(SubmitMainFormButton('Login', formId));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {};
    fields.forEach((field) => {
      const input = field.querySelector('.field-input');
      if (input === null) return;
      data[input.name] = input.value;
    });
    try {
      const response = await login(data, LOGIN_URL);
      if (response.ok) {
        loginError.hide();
        startWorkspace();
      } else {
        loginError.showInvalidCredentials();
      }
    } catch (err) {
      window.navigator.onLine
        ? loginError.showSomethingWentWrong()
        : loginError.showCantAccessInternet();
      console.log(err);
    }
  });

  box.append(form);
  container.append(box);
  return container;
};

export default getLoginContainer;
