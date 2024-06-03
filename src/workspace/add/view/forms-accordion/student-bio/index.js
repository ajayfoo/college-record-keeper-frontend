import {
  Checkbox,
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
  const NAME_PREFIX = 'achievementDto.';
  const achievementTypes = await getAchievementTypes();
  const achievementTypeField = SelectField(
    'Type',
    {
      id: `${ID_PREFIX}-achievement-type`,
      type: 'text',
      name: NAME_PREFIX + 'achievementTypeId',
    },
    achievementTypes.map((a) => ({ text: a.label, value: a.id })),
  );
  const achievementLevels = await getAchievementLevels();
  const achievementLevelField = SelectField(
    'Level',
    {
      id: `${ID_PREFIX}-achievement-level`,
      type: 'text',
      name: NAME_PREFIX + 'achievementLevelId',
    },
    achievementLevels.map((a) => ({ text: a.name, value: a.id })),
  );
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      name: NAME_PREFIX + 'name',
      value: 'Chess Champ',
    }),
    achievementTypeField.getElement(),
    achievementLevelField.getElement(),

    Field('Prize', {
      id: `${ID_PREFIX}-prize`,
      name: NAME_PREFIX + 'prize',
      value: 'Some prize',
    }),
    Field('Date', {
      id: `${ID_PREFIX}-date`,
      type: 'date',
      name: NAME_PREFIX + 'date',
      value: '2022-10-22',
    }),
  ];

  return Fieldset('Achievement', fields);
};

const EmploymentFieldset = async (prefix) => {
  const ID_PREFIX = prefix + '-employment';
  const companies = await getCompanies();
  const NAME_PREFIX = 'employmentDto.';
  const placedCompanySelect = SelectField(
    'Placed Company',
    {
      id: `${ID_PREFIX}-placed-company`,
      type: 'text',
      name: NAME_PREFIX + 'companyId',
    },
    companies.map((c) => ({ text: c.name, value: c.id })),
  );
  const isEmployedCheckbox = Checkbox(
    'Is Employed',
    {
      id: `${ID_PREFIX}-is-employed`,
      name: NAME_PREFIX + 'IsEmployed',
    },
    (event) => {
      fields.forEach((field) => {
        if (field === isEmployedCheckbox) return;
        field.getInputElement().disabled = !event.target.checked;
      });
    },
  );

  const disableAllFieldsExceptCheckbox = (fields) => {
    fields.forEach((field) => {
      field.getInputElement().disabled = field !== isEmployedCheckbox;
    });
  };

  const fields = [
    isEmployedCheckbox,
    placedCompanySelect.getElement(),
    Field('Salary', {
      id: `${ID_PREFIX}-salary`,
      type: 'number',
      name: NAME_PREFIX + 'salary',
      value: 10000,
    }),
    Field('Tenure Start', {
      id: `${ID_PREFIX}-tenure-start`,
      type: 'date',
      step: 1,
      name: NAME_PREFIX + 'tenureStart',
      value: '2022-10-22',
    }),
    Field('Tenure End', {
      id: `${ID_PREFIX}-tenure-end`,
      type: 'date',
      step: 1,
      name: NAME_PREFIX + 'tenureEnd',
      value: '2022-10-22',
    }),
  ];

  disableAllFieldsExceptCheckbox(fields);

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
      value: 'Foo',
    }),
    Field('Middle Name', {
      id: `${ID_PREFIX}-middle-name`,
      type: 'text',
      maxlength: 150,
      value: 'Bar',
    }),
    Field('Last Name', {
      id: `${ID_PREFIX}-last-name`,
      type: 'text',
      required: 'true',
      maxlength: 150,
      value: 'Buz',
    }),
    Field('CET Percentile', {
      id: `${ID_PREFIX}-cet-score`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
      value: 1,
    }),
    Field('HSC Percentage', {
      id: `${ID_PREFIX}-hsc-percentage`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
      value: 1,
    }),
    Field('SSC Percentage', {
      id: `${ID_PREFIX}-ssc-percentage`,
      type: 'number',
      required: 'true',
      min: 0,
      max: 100,
      value: 1,
    }),
    Field('Date Of Birth', {
      id: `${ID_PREFIX}-dob`,
      type: 'date',
      required: 'true',
      step: 1,
      value: '2022-10-20',
    }),
    Field('Year Of Admission', {
      id: `${ID_PREFIX}-year-of-admission`,
      type: 'number',
      required: 'true',
      step: 1,
      value: 2022,
    }),
    Field('Academic Score', {
      id: `${ID_PREFIX}-academic-score`,
      type: 'number',
      min: '0',
      max: '100',
      value: 2,
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
