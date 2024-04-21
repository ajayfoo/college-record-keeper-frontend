const FormHeading = (headingText) => {
  const heading = document.createElement('h3');
  heading.textContent = headingText;
  return heading;
};

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
export { FormHeading, Field };
