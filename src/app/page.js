import HeroSlider from "@/components/home/HeroSlider";
import PopularCourses from "@/components/home/PopularCourses";


export default function Home() {
  return (
    <div className="container mx-auto">
      <HeroSlider></HeroSlider>
      <PopularCourses></PopularCourses>
    </div>
  );
}
