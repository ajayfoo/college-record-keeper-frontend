import Field from '../../../../../components';

import { SubmitMainFormButton, AccordionFormItem } from '../../components';

const Achievement = () => {
  const ID_PREFIX = 'add-achievement-form';
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      minlength: 1,
      maxlength: 150,
    }),
    Field('Type', {
      id: `${ID_PREFIX}-type`,
    }),
    Field('Level', {
      id: `${ID_PREFIX}-level`,
    }),
    Field('Prize', {
      id: `${ID_PREFIX}-prize`,
    }),
    Field('Year', {
      id: `${ID_PREFIX}-year`,
      type: 'number',
      min: '1900',
      max: '2090',
      step: 1,
    }),
    SubmitMainFormButton('Add', ID_PREFIX, () => {}),
  ];
  return AccordionFormItem('Achievement', fields);
};

export default Achievement;
