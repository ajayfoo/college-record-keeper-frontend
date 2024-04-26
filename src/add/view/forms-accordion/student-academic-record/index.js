import {
  Field,
  SubmitMainFormButton,
  AccordionFormItem,
} from '../../components';

const StudentAcademicRecord = () => {
  const ID_PREFIX = 'add-student-academic-record-form';
  const fields = [
    Field('ID', {
      id: `${ID_PREFIX}-id`,
    }),
    Field('Semester', {
      id: `${ID_PREFIX}-semester`,
    }),
    Field('Year', {
      id: `${ID_PREFIX}-year`,
      type: 'number',
    }),
    Field('Score', {
      id: `${ID_PREFIX}-score`,
      type: 'number',
    }),
    SubmitMainFormButton('Add', ID_PREFIX, () => {}),
  ];
  return AccordionFormItem('Student Academic Record', fields);
};

export default StudentAcademicRecord;
