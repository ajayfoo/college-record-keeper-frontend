const uri = {
  STUDENT_BIO: 'student',
  ACHIEVEMENT_TYPE: 'achievementtype',
  ACHIEVEMENT: 'achievement',
  COMPANY: 'company',
  STUDENT_ACADEMIC_RECORD: 'studentacademicrecord',
};

const getHttpEndpointForForm = (name) => {
  return (
    process.env.BACKEND_URL + '/' + uri[name.replaceAll(' ', '_').toUpperCase()]
  );
};

const postDataForForm = async (name, data) => {
  const response = await fetch(getHttpEndpointForForm(name), {
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

const getLatestStudents = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/student/latests', {
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

export { getHttpEndpointForForm, postDataForForm, getLatestStudents };
