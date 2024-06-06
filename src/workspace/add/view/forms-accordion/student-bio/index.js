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
  makeId,
  stringBeforeNumbers,
} from '../../../../../utils';

import AddIconSrc from './images/add.svg';

import { AccordionFormItem } from '../../components';
import './style.css';

const AchievementFieldset = async (idPrefix, namePrefix, legend) => {
  const closeBtn = document.createElement('button');
  closeBtn.type = 'button';
  closeBtn.textContent = 'X';
  closeBtn.classList.add('close');
  const achievementTypes = await getAchievementTypes();
  const achievementTypeField = SelectField(
    'Type',
    {
      id: `${idPrefix}-type`,
      type: 'text',
      name: namePrefix + 'achievementTypeId',
    },
    achievementTypes.map((a) => ({ text: a.label, value: a.id })),
  );
  const achievementLevels = await getAchievementLevels();
  const achievementLevelField = SelectField(
    'Level',
    {
      id: `${idPrefix}-level`,
      type: 'text',
      name: namePrefix + 'achievementLevelId',
    },
    achievementLevels.map((a) => ({ text: a.name, value: a.id })),
  );

  const fields = [
    Field('Name', {
      id: `${idPrefix}-name`,
      name: namePrefix + 'name',
      value: 'Chess Champ',
    }),
    achievementTypeField.getElement(),
    achievementLevelField.getElement(),

    Field('Prize', {
      id: `${idPrefix}-prize`,
      name: namePrefix + 'prize',
      value: 'Some prize',
    }),
    Field('Date', {
      id: `${idPrefix}-date`,
      type: 'date',
      name: namePrefix + 'date',
      value: '2022-10-22',
    }),
  ];

  const updateNames = (num) => {
    const nameField = fields[0].querySelector('input');
    const achievementType = fields[1].querySelector('select');
    const achievementLevel = fields[2].querySelector('select');
    const prize = fields[3].querySelector('input');
    const date = fields[4].querySelector('input');
    const namePrefixWithoutNum = stringBeforeNumbers(namePrefix) + num + '.';

    nameField.name = namePrefixWithoutNum + 'name';
    achievementType.name = namePrefixWithoutNum + 'type';
    achievementLevel.name = namePrefixWithoutNum + 'level';
    prize.name = namePrefixWithoutNum + 'prize';
    date.name = namePrefixWithoutNum + 'date';
  };

  const fieldset = Fieldset(legend, fields);
  fieldset.appendChild(closeBtn);
  fieldset.id = idPrefix;
  closeBtn.addEventListener('click', () => {
    fieldset.remove();
    const achievementFieldRemovedEvent = new CustomEvent(
      'achievementFieldRemoved',
      { detail: { id: idPrefix } },
    );
    window.dispatchEvent(achievementFieldRemovedEvent);
  });
  const getElement = () => fieldset;
  return { getElement, updateNames };
};

const AchievementAdder = (idPrefix) => {
  const element = document.createElement('div');
  element.classList.add('achievement-adder');

  const heading = document.createElement('h4');
  heading.textContent = 'Achievements';
  element.appendChild(heading);

  const achievements = document.createElement('div');
  achievements.classList.add('achievements');

  const achievementMap = {};

  const addBtn = document.createElement('button');
  addBtn.type = 'button';

  const addIcon = document.createElement('img');
  addIcon.src = AddIconSrc;

  addBtn.appendChild(addIcon);

  let achievementCount = 0;
  addBtn.addEventListener('click', async () => {
    const newIdPrefix = idPrefix + '-' + makeId(3) + '-achievement';
    const achievementFieldset = await AchievementFieldset(
      newIdPrefix,
      'achievementsDto.' + achievementCount + '.',
      'Achievement No.' + (achievementCount + 1),
    );
    ++achievementCount;
    achievements.appendChild(achievementFieldset.getElement());
    achievementMap[newIdPrefix] = achievementFieldset;
  });

  window.addEventListener('achievementFieldRemoved', (event) => {
    delete achievementMap[event.detail.id];
    const achievementMapValues = Object.values(achievementMap);
    let i = 0;
    for (const a of achievementMapValues) {
      a.updateNames(i);
      const legend = a.getElement().querySelector('legend');
      legend.textContent = 'Achievement No.' + (i + 1);
      ++i;
    }
    --achievementCount;
  });

  element.append(achievements, addBtn);
  return element;
};

const IsEmployedRadio = (idPrefix, namePrefix, otherFields) => {
  const element = document.createElement('div');
  element.classList.add('field', 'is-employed');

  const desc = document.createElement('p');
  desc.textContent = 'Is employed?';

  const yes = Radio({
    id: idPrefix + '-is-employed',
    name: namePrefix + 'IsEmployed',
    required: true,
    value: true,
    'aria-label': 'yes',
  });

  const no = Radio({
    id: idPrefix + '-is-no-employed',
    name: namePrefix + 'IsEmployed',
    required: true,
    value: false,
    checked: true,
    'aria-label': 'no',
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
