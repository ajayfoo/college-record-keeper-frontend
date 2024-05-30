import {
  Field,
  Fieldset,
  SelectField,
  SubmitMainFormButton,
} from '../../../../../components';

import { AccordionFormItem } from '../../components';
import './style.css';

const AchievementFieldset = (prefix) => {
  const ID_PREFIX = prefix + '-achievement';
  const achievementType = SelectField(
    'Type',
    {
      id: `${ID_PREFIX}-achievement-type`,
      type: 'text',
    },
    [{ text: 'None', value: 'None' }],
  );
  const achievementLevel = SelectField(
    'Level',
    {
      id: `${ID_PREFIX}-achievement-level`,
      type: 'text',
    },
    [{ text: 'None', value: 'None' }],
  );
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-salary`,
    }),
    achievementType.getElement(),
    achievementLevel.getElement(),

    Field('Prize', {
      id: `${ID_PREFIX}-salary`,
    }),
    Field('Date', {
      id: `${ID_PREFIX}-salary`,
      type: 'date',
    }),
  ];

  return Fieldset('Achievement', fields);
};
const EmploymentFieldset = (prefix) => {
  const ID_PREFIX = prefix + '-employment';
  const placedCompanySelect = SelectField(
    'Placed Company',
    {
      id: `${ID_PREFIX}-placed-company`,
      type: 'text',
    },
    [{ text: 'None', value: 'None' }],
  );
  const fields = [
    placedCompanySelect.getElement(),
    Field('Salary', {
      id: `${ID_PREFIX}-salary`,
      type: 'number',
      min: '0',
      max: '100',
    }),
    Field('Tenure Start', {
      id: `${ID_PREFIX}-tenure-start`,
      type: 'date',
      step: 1,
    }),
    Field('Tenure End', {
      id: `${ID_PREFIX}-tenure-end`,
      type: 'date',
      step: 1,
    }),
  ];
  return Fieldset('Employment', fields);
};

const StudentBio = () => {
  const ID_PREFIX = 'add-student-bio-form';

  const dispatchNewStudentBioAddedEvent = (response) => {
    const newStudentBioAddedEvent = new CustomEvent('newStudentBioAdded', {
      detail: { ...response },
    });
    window.dispatchEvent(newStudentBioAddedEvent);
  };
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
    Field('Date Of Birth', {
      id: `${ID_PREFIX}-dob`,
      type: 'date',
      required: 'true',
      step: 1,
    }),
    Field('Year Of Admission', {
      id: `${ID_PREFIX}-year-of-admission`,
      type: 'number',
      required: 'true',
      step: 1,
    }),
    Field('Academic Score', {
      id: `${ID_PREFIX}-academic-score`,
      type: 'number',
      min: '0',
      max: '100',
    }),
    EmploymentFieldset(ID_PREFIX),
    AchievementFieldset(ID_PREFIX),
    SubmitMainFormButton('Add', `${ID_PREFIX}-submit`),
  ];
  return AccordionFormItem(
    'Student Bio',
    fields,
    dispatchNewStudentBioAddedEvent,
  );
};

export default StudentBio;
