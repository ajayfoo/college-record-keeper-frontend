import * as Components from '../components';
import './style.css';

const StudentBioForm = () => {
  const studentBioForm = document.createElement('div');
  studentBioForm.classList.add('student-bio-form');
  const ID_PREFIX = 'add-student-bio-form';
  studentBioForm.append(
    Components.FormHeading('Student Bio'),
    Components.Field('First Name', {
      id: `${ID_PREFIX}-first-name`,
      type: 'text',
    }),
    Components.Field('Middle Name', {
      id: `${ID_PREFIX}-middle-name`,
      type: 'text',
    }),
    Components.Field('Last Name', {
      id: `${ID_PREFIX}-last-name`,
      type: 'text',
    }),
    Components.Field('CET Score', {
      id: `${ID_PREFIX}-cet-score`,
      type: 'number',
    }),
    Components.Field('HSC Percentage', {
      id: `${ID_PREFIX}-hsc-percentage`,
      type: 'number',
    }),
    Components.Field('SSC Percentage', {
      id: `${ID_PREFIX}-ssc-percentage`,
      type: 'number',
    }),
    Components.Field('Year Of Admission', {
      id: `${ID_PREFIX}-year-of-admission`,
      type: 'number',
    })
  );
  return studentBioForm;
};

export default StudentBioForm;
