import HeroSlider from "@/components/home/HeroSlider";
import LearningTips from "@/components/home/LearningTips";
import PopularCourses from "@/components/home/PopularCourses";
import TopInstructors from "@/components/home/TopInstructors";


export default function Home() {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto space-y-4">
        <HeroSlider></HeroSlider>
        <PopularCourses></PopularCourses>
        <LearningTips></LearningTips>
        <TopInstructors></TopInstructors>
      </div>
    </div>
  );
}
