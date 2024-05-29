import './style.css';

const setMultipleAttributes = (ele, attributes) => {
  Object.entries(attributes).forEach(([key, value]) => {
    ele.setAttribute(key, value);
  });
};
const Field = (name, attributes) => {
  const field = document.createElement('div');
  field.classList.add('field');

  const label = document.createElement('label');
  label.textContent = name + (attributes.required ? '*' : '');
  label.setAttribute('for', attributes.id);

  const input = document.createElement('input');
  input.classList.add('field-input');
  setMultipleAttributes(input, attributes);
  if (input.name === '') input.name = name.replaceAll(' ', '');

  field.append(label, input);
  return field;
};

const populateSelectWithArray = (select, arr) => {
  for (const entry of arr) {
    const option = document.createElement('option');
    option.textContent = entry;
    option.value = entry;
    select.appendChild(option);
  }
};
const SelectField = (name, attributes, optionArray = []) => {
  const field = document.createElement('div');
  field.classList.add('field');

  const label = document.createElement('label');
  label.textContent = name + (attributes.required ? '*' : '');
  label.setAttribute('for', attributes.id);

  const select = document.createElement('select');
  select.classList.add('field-input');
  setMultipleAttributes(select, attributes);
  if (select.name === '') select.name = name.replaceAll(' ', '');
  populateSelectWithArray(select, optionArray);

  field.append(label, select);
  const getInputElement = () => select;
  const getElement = () => field;
  return { getElement, getInputElement };
};

const SubmitMainFormButton = (name, formId) => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-main-form-button');
  submitBtn.textContent = name;
  submitBtn.id = `${formId}-submit`;
  submitBtn.type = 'submit';
  return submitBtn;
};

export { Field, SelectField, SubmitMainFormButton };
