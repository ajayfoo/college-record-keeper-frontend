import { Field, SubmitMainFormButton, AccordionFormItem } from '../components';
import './style.css';

const StudentBioAccordionFormItem = () => {
  const ID_PREFIX = 'add-student-bio-form';

  const fields = [
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
    }),
    SubmitMainFormButton('Add', `${ID_PREFIX}-submit`, () => {}),
  ];
  return AccordionFormItem('Student Bio', fields);
};

export default StudentBioAccordionFormItem;
