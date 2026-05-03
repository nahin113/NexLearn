import { fetchCourseDetails } from "@/data/data";
import TrendingCoursesCard from "../courses/TrendingCourseCard";

const TrendingCourses =async () => {
    const courses = await fetchCourseDetails()
    const trendingCourses = courses.filter((course) => course.trending);
    return (
      <div className="py-16 bg-base-200/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-bold flex items-center gap-2">
                Trending Now <span className="text-2xl">🔥</span>
              </h2>
              <p className="text-base-content/60 mt-1">
                The most discussed and joined courses this week
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {
                trendingCourses.map(tc => <TrendingCoursesCard key={tc.id} tc={tc}></TrendingCoursesCard>)
            }
          </div>
        </div>
      </div>
    );
};

export default TrendingCourses;