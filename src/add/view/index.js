import FormsAccordion from './forms-accordion';

const AddView = () => {
  const addView = document.createElement('div');
  addView.classList.add('add-view');

  addView.append(FormsAccordion());
  return addView;
};

export default AddView;
