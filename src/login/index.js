import Field from '../components';
import './style.css';
const loginContainer = document.getElementById('login-form');

loginContainer.append(
  Field('Email ID', {
    required: true,
    type: 'text',
  }),
  Field('Password', {
    required: true,
    type: 'password',
  }),
);
