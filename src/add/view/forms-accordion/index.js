import StudentBioAccordionFormItem from '../student-bio';
import './style.css';

const FormsAccordion = () => {
  const formsAccordion = document.createElement('div');
  formsAccordion.classList.add('forms-accordion');
  formsAccordion.append(
    StudentBioAccordionFormItem(),
    StudentBioAccordionFormItem()
  );
  return formsAccordion;
};

export default FormsAccordion;
