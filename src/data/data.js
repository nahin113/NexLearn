export const fetchCourseDetails = async () => {
  const res = await fetch("https://nexlearn-server.onrender.com/courses");
  const data = res.json();
  return data;
};

export const fetchCourseinfoDetailed = async (id) => {
  const res = await fetch(`https://nexlearn-server.onrender.com/courses/${id}`);
  const data = res.json();
  return data;
};
