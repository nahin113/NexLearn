export const fetchCourseDetails = async () => {
  const res = await fetch("https://nexlearn-server.onrender.com/courses");
  const data = res.json();
  return data;
};
