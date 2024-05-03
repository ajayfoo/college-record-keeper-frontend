import './style.css';

const AccordionFormItemHeading = (name, showForm) => {
  const component = document.createElement('h3');
  component.textContent = name;
  component.classList.add('form-heading');
  component.addEventListener('click', showForm);
  component.addEventListener('click', () => {
    component.classList.toggle('selected');
  });
  return component;
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

const AccordionFormItem = (name, fields) => {
  const accordionFormItem = document.createElement('div');
  accordionFormItem.classList.add('accordion-form-item');

  const form = document.createElement('form');
  form.classList.add('hidden');
  fields.forEach((field) => form.appendChild(field));
  const showForm = () => {
    form.classList.toggle('hidden');
  };

  const heading = AccordionFormItemHeading(name, showForm);

  accordionFormItem.append(heading, form);
  return accordionFormItem;
};

export { AccordionFormItemHeading, SubmitMainFormButton, AccordionFormItem };
