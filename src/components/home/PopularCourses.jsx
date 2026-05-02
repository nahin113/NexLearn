import { fetchCourseDetails } from "@/data/data";
import CourseCard from "../courses/CourseCard";

const Rated = await fetchCourseDetails();

const PopularCourses = () => {
  const topThreeRated = Rated.sort((a, b) => b.rating - a.rating).slice(0, 3);
  console.log(topThreeRated);

  return (
    <section className="py-16 px-6 bg-base-100">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-extrabold tracking-tight">
              Popular Courses
            </h2>
            <p className="text-base-content/60 mt-2">
              Top 3 highest-rated courses by our community
            </p>
          </div>
          <button className="btn btn-ghost btn-sm text-primary">
            See all courses →
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topThreeRated.map((course) => (
            <CourseCard key={course.id} course={course}></CourseCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
