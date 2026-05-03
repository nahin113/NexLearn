import CourseCard from "@/components/courses/CourseCard";
import { fetchCourseDetails } from "@/data/data";

const courses = await fetchCourseDetails();
const AllCourses = () => {
  return (
    <div className="bg-base-100 min-h-screen">
      <div className="bg-base-200 py-12 border-b border-base-300">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="text-4xl font-bold">All Courses</h1>
          <p className="text-base-content/60 mt-2">
            Explore our full library of industry-leading courses.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          <main className="flex-1 space-y-8">
            <div>
              <label className="input validator">
                <input type="text" placeholder="Search for courses" required />
              </label>
              <button className="btn btn-neutral">Search</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {courses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
