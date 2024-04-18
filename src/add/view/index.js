import StudentBioForm from './student-bio';

const AddView = () => {
  const addView = document.createElement('div');
  addView.classList.add('add-view');

  addView.append(StudentBioForm());
  return addView;
};

export default AddView;
