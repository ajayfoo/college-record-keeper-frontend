import Field from '../../../../../components';
import { SubmitMainFormButton, AccordionFormItem } from '../../components';

const AchievementType = () => {
  const ID_PREFIX = 'add-achievement-type-form';
  const fields = [
    Field('Type', {
      id: `${ID_PREFIX}-type`,
      placeholder: 'eg. Sports, Extra Curricular',
    }),
    SubmitMainFormButton('Add', ID_PREFIX, () => {}),
  ];
  return AccordionFormItem('Achievement Type', fields);
};

export default AchievementType;
