import {
  Field,
  Fieldset,
  SelectField,
  SubmitMainFormButton,
} from '../../../../../components';
import {
  getAchievementTypes,
  getAchievementLevels,
  getCompanies,
} from '../../../../../utils';

import { AccordionFormItem } from '../../components';
import './style.css';

const AchievementFieldset = async (prefix) => {
  const ID_PREFIX = prefix + '-achievement';
  const achievementTypes = await getAchievementTypes();
  const achievementTypeField = SelectField(
    'Type',
    {
      id: `${ID_PREFIX}-achievement-type`,
      type: 'text',
    },
    achievementTypes.map((a) => ({ text: a.label, value: a.id })),
  );
  const achievementLevels = await getAchievementLevels();
  const achievementLevelField = SelectField(
    'Level',
    {
      id: `${ID_PREFIX}-achievement-level`,
      type: 'text',
    },
    achievementLevels.map((a) => ({ text: a.name, value: a.id })),
  );
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
    }),
    achievementTypeField.getElement(),
    achievementLevelField.getElement(),

    Field('Prize', {
      id: `${ID_PREFIX}-prize`,
    }),
    Field('Date', {
      id: `${ID_PREFIX}-date`,
      type: 'date',
    }),
  ];

  return Fieldset('Achievement', fields);
};
const EmploymentFieldset = async (prefix) => {
  const ID_PREFIX = prefix + '-employment';
  const companies = await getCompanies();
  const placedCompanySelect = SelectField(
    'Placed Company',
    {
      id: `${ID_PREFIX}-placed-company`,
      type: 'text',
    },
    companies.map((c) => ({ text: c.name, value: c.id })),
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

const StudentBio = async () => {
  const ID_PREFIX = 'add-student-bio-form';

  const dispatchNewStudentBioAddedEvent = (response) => {
    const newStudentBioAddedEvent = new CustomEvent('newStudentBioAdded', {
      detail: { ...response },
    });
    window.dispatchEvent(newStudentBioAddedEvent);
  };
  const employmentFieldset = await EmploymentFieldset(ID_PREFIX);
  const achievementFieldset = await AchievementFieldset(ID_PREFIX);
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
    achievementFieldset,
    employmentFieldset,
    SubmitMainFormButton('Add', `${ID_PREFIX}-submit`),
  ];
  return AccordionFormItem(
    'Student Bio',
    fields,
    dispatchNewStudentBioAddedEvent,
  );
};

export default StudentBio;
