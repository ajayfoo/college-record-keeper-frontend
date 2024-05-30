import Achievement from './achievement';
import AchievementType from './achievement-type';
import Company from './company';
import StudentBio from './student-bio';
import './style.css';

const FormsAccordion = async () => {
  const formsAccordion = document.createElement('div');
  formsAccordion.classList.add('forms-accordion');
  const studentBio = await StudentBio();
  const achievement = await Achievement();
  formsAccordion.append(studentBio, AchievementType(), achievement, Company());
  return formsAccordion;
};

export default FormsAccordion;
