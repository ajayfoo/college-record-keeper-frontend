import { Field, SubmitMainFormButton } from '../../../../../components';
import { AccordionFormItem } from '../../components';

const Company = () => {
  const ID_PREFIX = 'add-company-form';
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      minlength: 1,
      maxlength: 150,
      required: true,
      autocomplete: 'on',
    }),
    Field('Mininum Salary', {
      id: `${ID_PREFIX}-minimum-salary`,
      type: 'number',
      required: true,
    }),
    Field('Maximum Salary', {
      id: `${ID_PREFIX}-maximum-salary`,
      type: 'number',
      required: true,
    }),
    Field('Year', {
      id: `${ID_PREFIX}-year`,
      type: 'number',
      min: '1900',
      max: '2090',
      step: 1,
      required: true,
    }),
    SubmitMainFormButton('Add', ID_PREFIX, () => {}),
  ];
  return AccordionFormItem('Company', fields);
};

export default Company;
