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
    credentials: 'include',
    method: 'POST',
    mode: 'cors',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};
const canGetLatestStudents = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/student/latests', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.ok;
};
const getLatestStudents = async () => {
  const response = await fetch(process.env.BACKEND_URL + '/student/latests', {
    credentials: 'include',
    method: 'GET',
    mode: 'cors',
  });
  return response.json();
};

const deleteStudent = async (id) => {
  const response = await fetch(process.env.BACKEND_URL + '/student/' + id, {
    credentials: 'include',
    method: 'DELETE',
    mode: 'cors',
  });
  return response.ok;
};

const downloadReportPdf = async (id) => {
  const response = await fetch(
    process.env.BACKEND_URL + '/student/report/' + id,
    {
      credentials: 'include',
      method: 'GET',
      mode: 'cors',
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  console.log(url);
  window.open(url, '_blank');
};
export {
  getHttpEndpointForForm,
  postDataForForm,
  getLatestStudents,
  deleteStudent,
  downloadReportPdf,
  canGetLatestStudents,
};
