import Field from '../../../../../components';

import { SubmitMainFormButton, AccordionFormItem } from '../../components';

const Company = () => {
  const ID_PREFIX = 'add-company-form';
  const fields = [
    Field('Name', {
      id: `${ID_PREFIX}-name`,
      minlength: 1,
      maxlength: 150,
    }),
    Field('Mininum Salary', {
      id: `${ID_PREFIX}-minimum-salary`,
      type: 'number',
    }),
    Field('Maximum Salary', {
      id: `${ID_PREFIX}-maximum-salary`,
      type: 'number',
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
  return AccordionFormItem('Company', fields);
};

export default Company;
