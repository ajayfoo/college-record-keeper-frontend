import { Field, SubmitMainFormButton } from '../../../../../components';
import { AccordionFormItem } from '../../components';

const AchievementType = () => {
  const ID_PREFIX = 'add-achievement-type-form';
  const fields = [
    Field('Label', {
      id: `${ID_PREFIX}-label`,
      placeholder: 'eg. Sports, Extra Curricular',
    }),
    SubmitMainFormButton('Add', ID_PREFIX),
  ];
  return AccordionFormItem('Achievement Type', fields);
};

export default AchievementType;
