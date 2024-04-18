import * as AddComponents from '../components';

const StudentBioForm = () => {
  const studentBioForm = document.createElement('div');
  studentBioForm.classList.add('student-bio-form');
  studentBioForm.appendChild(AddComponents.FormHeading('Student Bio'));
  return studentBioForm;
};

export default StudentBioForm;
