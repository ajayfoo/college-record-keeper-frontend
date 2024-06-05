import {
  Field,
  Fieldset,
  Radio,
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

const AchievementFieldset = async (prefix, namePrefix, legend) => {
  const ID_PREFIX = prefix + '-achievement';

  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.textContent = 'X';
  const achievementTypes = await getAchievementTypes();
  const achievementTypeField = SelectField(
    'Type',
    {
      id: `${ID_PREFIX}-achievement-type`,
      type: 'text',
      name: namePrefix + 'achievementTypeId',
    },
    achievementTypes.map((a) => ({ text: a.label, value: a.id })),
  );
  const achievementLevels = await getAchievementLevels();
  const achievementLevelField = SelectField(
    'Level',
    {
      id: `${ID_PREFIX}-achievement-level`,
      type: 'text',
      name: namePrefix + 'achievementLevelId',
    },
    achievementLevels.map((a) => ({ text: a.name, value: a.id })),
  );

  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      name: namePrefix + 'name',
      value: 'Chess Champ',
    }),
    achievementTypeField.getElement(),
    achievementLevelField.getElement(),

    Field('Prize', {
      id: `${ID_PREFIX}-prize`,
      name: namePrefix + 'prize',
      value: 'Some prize',
    }),
    Field('Date', {
      id: `${ID_PREFIX}-date`,
      type: 'date',
      name: namePrefix + 'date',
      value: '2022-10-22',
    }),
  ];

  const fieldset = Fieldset(legend, fields);
  fieldset.appendChild(closeBtn);
  closeBtn.addEventListener('click', () => {
    fieldset.remove();
    const achievementFieldRemovedEvent = new CustomEvent(
      'achievementFieldRemoved',
    );
    window.dispatchEvent(achievementFieldRemovedEvent);
  });
  return fieldset;
};

const AchievementAdder = (idPrefix) => {
  const element = document.createElement('div');
  element.classList.add('achievement-adder');

  const heading = document.createElement('h4');
  heading.textContent = 'Achievements';
  element.appendChild(heading);

  const achievements = document.createElement('div');
  achievements.classList.add('achievements');

  const addBtn = document.createElement('button');
  addBtn.textContent = 'Add Achievement';
  addBtn.type = 'button';
  let achievementCount = 0;
  addBtn.addEventListener('click', async () => {
    const achievementFieldset = await AchievementFieldset(
      idPrefix + '-' + achievementCount,
      'achievementsDto.' + achievementCount + '.',
      'Achievement No.' + (achievementCount + 1),
    );
    ++achievementCount;
    achievements.appendChild(achievementFieldset);
  });

  element.append(achievements, addBtn);
  return element;
};

const IsEmployedRadio = (idPrefix, namePrefix, otherFields) => {
  const element = document.createElement('div');
  element.classList.add('field');

  const desc = document.createElement('p');
  desc.textContent = 'Is employed?';

  const yes = Radio('Yes', {
    id: idPrefix + '-is-employed',
    name: namePrefix + 'IsEmployed',
    required: true,
    value: true,
  });

  const no = Radio('No', {
    id: idPrefix + '-is-no-employed',
    name: namePrefix + 'IsEmployed',
    required: true,
    value: false,
    checked: true,
  });

  [yes, no].forEach((radio) =>
    radio.addEventListener('click', () => {
      otherFields.forEach((field) => {
        if (field === element) return;
        field.getInputElement().disabled =
          element.querySelector(
            'input[name="employmentDto.IsEmployed"]:checked',
          ).value === 'false';
      });
    }),
  );
  const radios = document.createElement('div');
  radios.classList.add('radios');
  radios.append(yes, no);

  element.append(desc, radios);
  return element;
};

const EmploymentFieldset = async (prefix) => {
  const employmentFieldsEle = document.createElement('div');
  employmentFieldsEle.classList.add('employment-fields');

  const heading = document.createElement('h4');
  heading.textContent = 'Employment';

  employmentFieldsEle.appendChild(heading);

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
  const fields = [
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

  const isEmployedRadios = IsEmployedRadio(ID_PREFIX, NAME_PREFIX, fields);
  fields.unshift(isEmployedRadios);
  const disableAllFieldsExceptCheckbox = (fields) => {
    fields.forEach((field) => {
      if (field === isEmployedRadios) return;
      field.getInputElement().disabled = true;
    });
  };

  disableAllFieldsExceptCheckbox(fields);
  fields.forEach((field) => employmentFieldsEle.appendChild(field));
  return employmentFieldsEle;
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
  const achievementAdder = AchievementAdder(ID_PREFIX);
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
    achievementAdder,
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
