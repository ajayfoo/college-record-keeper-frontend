import { getHttpEndpointForForm, postDataForForm } from '../../../../utils';
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

const AccordionFormItem = (name, fields) => {
  const accordionFormItem = document.createElement('div');
  accordionFormItem.classList.add('accordion-form-item');

  const form = document.createElement('form');
  form.classList.add('hidden');
  form.method = 'post';
  form.action = getHttpEndpointForForm(name);
  fields.forEach((field) => form.appendChild(field));
  const showForm = () => {
    form.classList.toggle('hidden');
  };
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const data = {};
    fields.forEach((field) => {
      const input = field.querySelector('input');
      if (input === null) return;
      data[input.name] = input.value;
    });
    console.log(data);
    postDataForForm(name, data);
  });

  const heading = AccordionFormItemHeading(name, showForm);

  accordionFormItem.append(heading, form);
  return accordionFormItem;
};

export { AccordionFormItemHeading, AccordionFormItem };
