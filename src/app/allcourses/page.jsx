"use client";
import CourseCard from "@/components/courses/CourseCard";
import { fetchCourseDetails } from "@/data/data";
import { useState } from "react";

const initialCourses = await fetchCourseDetails();

const AllCourses = () => {
  const [searchValue, setSearchValue] = useState("");
  const [filteredCourses, setFilteredCourses] = useState(initialCourses);

  const handleSearch = () => {
    if (!searchValue.trim()) {
      setFilteredCourses(initialCourses);
      return;
    }

    const filterResult = initialCourses.filter((course) =>
      course.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredCourses(filterResult);
  };
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
                <input
                  type="text"
                  placeholder="Search for courses"
                  value={searchValue}
                  onChange={(e) => setSearchValue(e.target.value)}
                />
              </label>
              <button onClick={handleSearch} className="btn btn-neutral">
                Search
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredCourses.map((course) => (
                <CourseCard key={course.id} course={course}></CourseCard>
              ))}
            </div>
          </main>
        </div>
        {filteredCourses.length === 0 && (
          <div className="flex flex-col justify-center items-center min-h-[50vh] w-full text-center">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-8xl font-black text-base-300">
                No Results Found
              </h1>
              <p className="text-xl font-medium opacity-30">
                Try searching for a different keyword
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllCourses;
