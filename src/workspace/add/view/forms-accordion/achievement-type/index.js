import { Field, SubmitMainFormButton } from '../../../../../components';
import { AccordionFormItem } from '../../components';

const AchievementType = () => {
  const ID_PREFIX = 'add-achievement-type-form';
  const dispatchTypeAddedEvent = (achievementType) => {
    const newAchievementTypeAddedEvent = new CustomEvent(
      'newAchievementTypeAdded',
      {
        detail: {
          id: achievementType.id,
          label: achievementType.label,
        },
      },
    );
    window.dispatchEvent(newAchievementTypeAddedEvent);
  };
  const fields = [
    Field('Label', {
      id: `${ID_PREFIX}-label`,
      placeholder: 'eg. Sports, Extra Curricular',
    }),
    SubmitMainFormButton('Add', ID_PREFIX),
  ];
  return AccordionFormItem('Achievement Type', fields, dispatchTypeAddedEvent);
};

export default AchievementType;
