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
  label.textContent = name;
  label.setAttribute('for', attributes.id);

  const input = document.createElement('input');
  setMultipleAttributes(input, attributes);

  field.append(label, input);
  return field;
};

const SubmitMainFormButton = (name, formId, onClick) => {
  const submitBtn = document.createElement('button', () => {});
  submitBtn.classList.add('submit-main-form-button');
  submitBtn.textContent = name;
  submitBtn.id = `${formId}-submit`;
  submitBtn.type = 'submit';
  submitBtn.addEventListener('click', onClick);
  return submitBtn;
};

export { Field, SubmitMainFormButton };
