import * as AddComponents from '../components';

const StudentBioForm = () => {
  const studentBioForm = document.createElement('student-bio-form');
  studentBioForm.appendChild(AddComponents.FormHeading());
  return studentBioForm;
};

export default StudentBioForm;
