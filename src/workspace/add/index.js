import AddView from './view';

const AddController = async () => {
  const addView = await AddView();
  const getView = () => addView;
  return { getView };
};

export default AddController;
