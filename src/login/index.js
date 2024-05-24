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
  const loginError = document.createElement('p');
  loginError.classList.add('login-error');

  return loginError;
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
  form.append(loginError);
  form.append(SubmitMainFormButton('Login', formId));

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {};
    fields.forEach((field) => {
      const input = field.querySelector('.field-input');
      if (input === null) return;
      data[input.name] = input.value;
    });
    const response = await login(data, LOGIN_URL);
    if (response.ok) {
      loginError.classList.remove('shown');
      startWorkspace();
    } else {
      loginError.classList.add('shown');
      loginError.textContent = window.navigator.onLine
        ? 'Invalid Credentials'
        : "Can't access the Internet";
    }
  });

  box.append(form);
  container.append(box);
  return container;
};

export default getLoginContainer;
