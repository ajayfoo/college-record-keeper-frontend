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

  field.getInputElement = () => input;
  field.append(label, input);
  return field;
};

const Checkbox = (name, attributes, onChange) => {
  const checkbox = document.createElement('div');
  checkbox.classList.add('field', 'checkbox');

  const label = document.createElement('label');
  label.textContent = name + (attributes.required ? '*' : '');
  label.setAttribute('for', attributes.id);

  const input = document.createElement('input');
  input.type = 'checkbox';
  input.classList.add('field-input');
  input.addEventListener('change', (event) => {
    onChange(event);
  });
  setMultipleAttributes(input, attributes);
  if (input.name === '') input.name = name.replaceAll(' ', '');

  checkbox.getInputElement = () => input;
  checkbox.append(input, label);
  return checkbox;
};

const populateSelectWithArray = (select, arr) => {
  for (const entry of arr) {
    const option = document.createElement('option');
    option.textContent = entry.text;
    option.value = entry.value;
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

  field.getInputElement = () => select;
  field.append(label, select);
  const getSelectElement = () => select;
  const getElement = () => field;
  return { getElement, getSelectElement };
};

const Fieldset = (name, fields) => {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  legend.textContent = name;
  fieldset.appendChild(legend);
  fields.forEach((field) => fieldset.append(field));
  return fieldset;
};

const SubmitMainFormButton = (name, formId) => {
  const submitBtn = document.createElement('button');
  submitBtn.classList.add('submit-main-form-button');
  submitBtn.textContent = name;
  submitBtn.id = `${formId}-submit`;
  submitBtn.type = 'submit';
  return submitBtn;
};

const Radio = (labelTxt, attributes) => {
  const element = document.createElement('div');

  const label = document.createElement('label');
  label.textContent = labelTxt;

  const radio = document.createElement('input');
  radio.type = 'radio';
  setMultipleAttributes(radio, attributes);

  element.append(label, radio);
  return element;
};

export { Field, SelectField, SubmitMainFormButton, Fieldset, Checkbox, Radio };
