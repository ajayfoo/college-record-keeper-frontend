import { Field, SubmitMainFormButton } from '../components';
import '../style.css';
import './style.css';
const loginContainer = document.getElementById('login-form');

const formId = 'login-form';
const ID_PREFIX = formId + '-';
loginContainer.append(
  Field('Email ID', {
    id: ID_PREFIX + 'email-id',
    required: true,
    type: 'text',
  }),
  Field('Password', {
    id: ID_PREFIX + 'password-id',
    required: true,
    type: 'password',
  }),
  SubmitMainFormButton('Login', formId, () => {}),
);
