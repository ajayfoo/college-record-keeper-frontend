import FormsAccordian from './forms-accordian';

const AddView = () => {
  const addView = document.createElement('div');
  addView.classList.add('add-view');

  addView.append(FormsAccordian());
  return addView;
};

export default AddView;
