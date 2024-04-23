import StudentBio from '../student-bio';
import './style.css';

const FormsAccordion = () => {
  const formsAccordion = document.createElement('div');
  formsAccordion.classList.add('forms-accordion');
  formsAccordion.append(StudentBio(), StudentBio());
  return formsAccordion;
};

export default FormsAccordion;
