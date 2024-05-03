import Achievement from './achievement';
import AchievementType from './achievement-type';
import Company from './company';
import StudentAcademicRecord from './student-academic-record';
import StudentBio from './student-bio';
import './style.css';

const FormsAccordion = () => {
  const formsAccordion = document.createElement('div');
  formsAccordion.classList.add('forms-accordion');
  formsAccordion.append(
    StudentBio(),
    AchievementType(),
    Achievement(),
    Company(),
    StudentAcademicRecord()
  );
  return formsAccordion;
};

export default FormsAccordion;
