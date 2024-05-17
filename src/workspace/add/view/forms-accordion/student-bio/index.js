import { Field, SubmitMainFormButton } from '../../../../../components';

import { AccordionFormItem } from '../../components';
import './style.css';

const StudentBio = () => {
  const ID_PREFIX = 'add-student-bio-form';

  const fields = [
    Field('First Name', {
      id: `${ID_PREFIX}-first-name`,
      type: 'text',
      required: 'true',
      minlength: 1,
      maxlength: 150,
    }),
    Field('Middle Name', {
      id: `${ID_PREFIX}-middle-name`,
      type: 'text',
      required: 'true',
      maxlength: 150,
    }),
    Field('Last Name', {
      id: `${ID_PREFIX}-last-name`,
      type: 'text',
      required: 'true',
      maxlength: 150,
    }),
    Field('CET Percentile', {
      id: `${ID_PREFIX}-cet-score`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
    }),
    Field('HSC Percentage', {
      id: `${ID_PREFIX}-hsc-percentage`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
    }),
    Field('SSC Percentage', {
      id: `${ID_PREFIX}-ssc-percentage`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
    }),
    Field('DOB', {
      id: `${ID_PREFIX}-dob`,
      type: 'date',
      required: 'true',
      min: '1900',
      max: '2090',
      step: 1,
    }),
    Field('Year Of Admission', {
      id: `${ID_PREFIX}-year-of-admission`,
      type: 'date',
      required: 'true',
      min: '1900',
      max: '2090',
      step: 1,
    }),
    SubmitMainFormButton('Add', `${ID_PREFIX}-submit`, () => {}),
  ];
  return AccordionFormItem('Student Bio', fields);
};

export default StudentBio;
