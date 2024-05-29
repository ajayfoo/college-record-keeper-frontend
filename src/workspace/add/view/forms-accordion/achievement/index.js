import {
  Field,
  SelectField,
  SubmitMainFormButton,
} from '../../../../../components';
import { getAchievementTypeLabels } from '../../../../../utils';

import { AccordionFormItem } from '../../components';

const Achievement = async () => {
  const ID_PREFIX = 'add-achievement-form';
  const achievementLabels = await getAchievementTypeLabels();
  const typeEle = SelectField(
    'Type',
    {
      id: `${ID_PREFIX}-type`,
      name: 'AchievementTypeId',
      required: 'true',
    },

    achievementLabels,
  );
  window.addEventListener('newAchievementTypeAdded', (event) => {
    const optionEle = document.createElement('option');
    optionEle.value = event.detail.id;
    optionEle.textContent = event.detail.label;
    console.log('event was received');
    typeEle.getInputElement().appendChild(optionEle);
  });

  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      minlength: 1,
      maxlength: 150,
      required: 'true',
    }),
    typeEle.getElement(),
    Field('Level', {
      id: `${ID_PREFIX}-level`,
      required: 'true',
    }),
    Field('Prize', {
      id: `${ID_PREFIX}-prize`,
      required: 'true',
    }),
    Field('Date', {
      id: `${ID_PREFIX}-date`,
      type: 'date',
      required: 'true',
    }),
    SubmitMainFormButton('Add', ID_PREFIX, () => {}),
  ];
  return AccordionFormItem('Achievement', fields);
};

export default Achievement;
