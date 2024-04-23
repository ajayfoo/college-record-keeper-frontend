import { FormHeading, Field } from '../components';
import './style.css';

const StudentBioForm = () => {
  const studentBioForm = document.createElement('div');
  studentBioForm.classList.add('form-wrapper');
  const form = document.createElement('form');
  const ID_PREFIX = 'add-student-bio-form';
  form.append(
    Field('First Name', {
      id: `${ID_PREFIX}-first-name`,
      type: 'text',
    }),
    Field('Middle Name', {
      id: `${ID_PREFIX}-middle-name`,
      type: 'text',
    }),
    Field('Last Name', {
      id: `${ID_PREFIX}-last-name`,
      type: 'text',
    }),
    Field('CET Score', {
      id: `${ID_PREFIX}-cet-score`,
      type: 'number',
    }),
    Field('HSC Percentage', {
      id: `${ID_PREFIX}-hsc-percentage`,
      type: 'number',
    }),
    Field('SSC Percentage', {
      id: `${ID_PREFIX}-ssc-percentage`,
      type: 'number',
    }),
    Field('Year Of Admission', {
      id: `${ID_PREFIX}-year-of-admission`,
      type: 'number',
    })
  );

  studentBioForm.append(form);
  return studentBioForm;
};

const StudentBio = () => {
  const studentBio = document.createElement('div');
  studentBio.classList.add('student-bio');

  const form = StudentBioForm();

  const formHeading = FormHeading('Student Bio', () => {
    const currentStyle = getComputedStyle(form).display;
    form.style.display = currentStyle === 'block' ? 'none' : 'block';
  });

  studentBio.append(formHeading, form);

  return studentBio;
};

export default StudentBio;
