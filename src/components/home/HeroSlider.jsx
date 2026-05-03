"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const slides = [
  {
    id: 1,
    badge: "NEW COURSES AVAILABLE",
    title: "Upgrade Your Skills Today",
    highlight: "Skills",
    description:
      "Learn from industry experts and master the tools used by world-class teams.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    badge: "TRENDING NOW",
    title: "Master Modern Development",
    highlight: "Development",
    description:
      "Stay ahead with cutting-edge technologies and real-world projects.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    badge: "START YOUR JOURNEY",
    title: "Build Your Career Path",
    highlight: "Career",
    description:
      "Structured learning paths designed to land you real opportunities.",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop",
  },
];

const HeroSlider = () => {
  return (
    <Swiper
      pagination={{ clickable: true }}
      autoplay={{ delay: 6000, disableOnInteraction: false }}
      loop={true}
      modules={[Pagination, Autoplay]}
      className="w-full"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className="hero bg-base-200 pt-6 border-b border-base-200">
            <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="text-center lg:text-left order-2 lg:order-1">
                  <div className="badge badge-secondary badge-outline mb-4">
                    {slide.badge}
                  </div>

                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    {slide.title.split(" ").map((word, i) =>
                      word === slide.highlight ? (
                        <span key={i} className="text-primary">
                          {" "}
                          {word}{" "}
                        </span>
                      ) : (
                        " " + word + " "
                      )
                    )}
                  </h1>

                  <p className="py-6 text-base-content/70 text-lg">
                    {slide.description}
                  </p>

                  <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                    <button className="btn btn-primary px-8">
                      Get Started
                    </button>

                    <Link href="/allcourses">
                      <button className="btn btn-outline">
                        View All Courses
                      </button>
                    </Link>
                  </div>

                  <div className="mt-8 flex items-center gap-4 text-sm opacity-70 justify-center lg:justify-start">
                    <div className="avatar-group -space-x-4">
                      {[1, 2, 3].map((img) => (
                        <div key={img} className="avatar w-8 border-base-100">
                          <Image
                            src={`https://i.pravatar.cc/100?img=${img}`}
                            alt="user"
                            width={50}
                            height={50}
                          />
                        </div>
                      ))}
                    </div>
                    <p>Joined by 10k+ students</p>
                  </div>
                </div>

                <div className="order-1 lg:order-2 flex justify-center">
                  <Image
                    src={slide.image}
                    width={300}
                    height={300}
                    className="w-full max-w-md rounded-2xl shadow-xl"
                    alt="Learning illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSlider;
