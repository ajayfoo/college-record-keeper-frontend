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

const deleteStudent = async (id) => {
  const response = await fetch(process.env.BACKEND_URL + '/student/' + id, {
    method: 'DELETE',
    mode: 'cors',
  });
  return response.ok;
};

const downloadReportPdf = async (id) => {
  const response = await fetch(
    process.env.BACKEND_URL + '/student/report/' + id,
    {
      method: 'GET',
      mode: 'cors',
    },
  );
  if (!response.ok) throw new Error(response.statusText);
  const blob = await response.blob();
  const url = window.URL.createObjectURL(blob);
  const anchorEle = document.createElement('a');
  anchorEle.href = url;
  anchorEle.download = 'hello.pdf';
  anchorEle.click();
  console.log(url);
};
export {
  getHttpEndpointForForm,
  postDataForForm,
  getLatestStudents,
  deleteStudent,
  downloadReportPdf,
};
