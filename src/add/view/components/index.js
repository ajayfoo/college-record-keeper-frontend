import './style.css';

const setMultipleAttributes = (ele, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
};
const FormHeading = (name, showForm) => {
  const formHeading = document.createElement('h3');
  formHeading.textContent = name;
  formHeading.classList.add('form-heading');
  formHeading.addEventListener('click', showForm);
  formHeading.addEventListener('click', () => {
    formHeading.classList.toggle('open');
  });
  return formHeading;
};
const Field = (name, attributes) => {
  const field = document.createElement('div');
  field.classList.add('field');

  const label = document.createElement('label');
  label.textContent = name;
  label.setAttribute('for', attributes.id);

  const input = document.createElement('input');
  setMultipleAttributes(input, attributes);

  field.append(label, input);
  return field;
};
export { FormHeading, Field };
