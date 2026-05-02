import { fetchCourseDetails } from "@/data/data";
import InstructorsCard from "../instructors/InstructorsCard";
const data = await fetchCourseDetails();
const TopInstructors = () => {
    const instructors = data.slice(0,4)

  return (
    <div className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl font-bold">Our Expert Instructors</h2>
          <p className="text-base-content/60 mt-2 text-lg">
            Learn from the best in the industry
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {instructors.map((instructor) => (
            <InstructorsCard
              key={instructor.id}
              instructor={instructor}
            ></InstructorsCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopInstructors;
