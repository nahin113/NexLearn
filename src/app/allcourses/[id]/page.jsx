import CourseActions from "@/components/ui/CourseActions";
import { fetchCourseinfoDetailed } from "@/data/data";
import Link from "next/link";
import { notFound } from "next/navigation";
import { GoStarFill } from "react-icons/go";
import { toast } from "react-toastify";

const CourseDetails = async ({ params }) => {
  const { id } = await params;
  const course = await fetchCourseinfoDetailed(id);
if (!course || !course.curriculum) {
  notFound();
}
  return (
    <div className="bg-base-100 min-h-screen py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-sm breadcrumbs mb-6 opacity-60">
          <ul>
            <li>
              <Link href="/allcourses">All Courses</Link>
            </li>
            <li>Details</li>
          </ul>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <div className="flex items-center gap-3 mb-4">
              <span className="badge badge-primary">{course.category}</span>
              {course.trending && (
                <span className="badge badge-secondary badge-outline font-bold text-xs uppercase">
                  Trending
                </span>
              )}
            </div>

            <h1 className="text-4xl font-extrabold mb-4">{course.title}</h1>
            <p className="text-lg text-base-content/70 mb-8">
              {course.description}
            </p>

            <div className="flex items-center gap-4 mb-10 p-4 bg-base-200 rounded-xl">
              <div className="avatar">
                <div className="w-16 rounded-full">
                  <img src={course.instructorImage} alt={course.instructor} />
                </div>
              </div>
              <div>
                <p className="text-sm opacity-60 italic">Instructed by</p>
                <h3 className="text-xl font-bold">{course.instructor}</h3>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Course Curriculum</h2>
              <div className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden shadow-sm">
                {course.curriculum.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 border-b border-base-200 last:border-0 hover:bg-base-200 transition-colors"
                  >
                    <span className="flex-none w-8 h-8 flex items-center justify-center bg-primary/10 text-primary rounded-full text-sm font-bold">
                      {index + 1}
                    </span>
                    <span className="text-base-content font-medium">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/3">
            <div className="card bg-base-100 shadow-2xl border border-base-200 top-10">
              <figure>
                <img
                  src={course.image}
                  alt="Course Preview"
                  className="w-full"
                />
              </figure>

              <div className="card-body">
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between items-center py-2 border-b border-base-200">
                    <span className="opacity-60">Rating</span>
                    <span className="font-bold text-primary text-lg flex gap-2 items-center">
                      <GoStarFill className="text-amber-400 w-5 h-5" />
                      {course.rating}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-base-200">
                    <span className="opacity-60">Duration</span>
                    <span className="font-bold">{course.duration}</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-base-200">
                    <span className="opacity-60">Level</span>
                    <span className="font-bold text-secondary">
                      {course.level}
                    </span>
                  </div>
                </div>
                <CourseActions courseTitle={course.title} ></CourseActions>
                <p className="text-center text-xs opacity-50 mt-4">
                  Full Lifetime Access Included
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;
