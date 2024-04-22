import StudentBio from '../student-bio';
import './style.css';

const FormsAccordian = () => {
  const formsAccordian = document.createElement('div');
  formsAccordian.classList.add('forms-accordian');
  formsAccordian.append(StudentBio());
  return formsAccordian;
};

export default FormsAccordian;
