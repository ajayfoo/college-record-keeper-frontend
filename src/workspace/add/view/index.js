import FormsAccordion from './forms-accordion';

const AddView = async () => {
  const addView = document.createElement('div');
  addView.classList.add('add-view');
  const formsAccordian = await FormsAccordion();
  addView.append(formsAccordian);
  return addView;
};

export default AddView;
