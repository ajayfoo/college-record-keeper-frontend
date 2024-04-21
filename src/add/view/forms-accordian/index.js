import StudentBioForm from '../student-bio';

const FormsAccordian = () => {
  const formsAccordian = document.createElement('div');
  formsAccordian.classList.add('form-accordian');
  formsAccordian.append(StudentBioForm());
  return formsAccordian;
};

export default FormsAccordian;
