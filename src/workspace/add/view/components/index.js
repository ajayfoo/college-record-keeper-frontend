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

const AccordionFormItem = (name, fields, onSubmit = () => {}) => {
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
    const fieldNameValues = Array.from(form.elements)
      .filter((e) => {
        if (e.type === 'radio') return e.checked;
        return e.name !== '' && !e.disabled;
      })
      .map((e) => {
        if (e.type === 'checkbox') return { name: e.name, value: e.checked };
        return { name: e.name, value: e.value };
      });
    console.log(fieldNameValues);
    fieldNameValues.forEach((nameValue) => {
      strToObj(nameValue.name, nameValue.value, data);
    });
    data.Inserted = new Date();
    data.LastUpdated = new Date();
    console.log(data);
    const response = await postDataForForm(name, data);
    console.log(response);
    onSubmit(response);
  });

  const heading = AccordionFormItemHeading(name, showForm);

  accordionFormItem.append(heading, form);
  return accordionFormItem;
};

function isNumberStr(numStr) {
  return !isNaN(parseInt(numStr));
}

function strToObj(str, value, initialObj) {
  const arr = str.split('.').reverse();
  let obj = initialObj;
  while (arr.length > 1) {
    const key = arr.pop();
    if (obj[key] === undefined && isNumberStr(arr[arr.length - 1])) {
      obj[key] = [];
    } else if (obj[key] === undefined) {
      obj[key] = {};
    }
    obj = obj[key];
  }
  obj[arr.pop()] = value;
  return initialObj;
}

export { AccordionFormItemHeading, AccordionFormItem };
