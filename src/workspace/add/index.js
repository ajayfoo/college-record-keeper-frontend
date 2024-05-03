import AddView from './view';

const AddController = () => {
  const addView = AddView();
  const getView = () => addView;
  return { getView };
};

export default AddController;
