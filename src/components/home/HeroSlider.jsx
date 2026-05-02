const HeroSlider = () => {
  return (
    <div className="hero bg-base-200 pt-6 border-b border-base-200">
      <div className="max-w-7xl mx-auto w-full px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="badge badge-secondary badge-outline mb-4">
              NEW COURSES AVAILABLE
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Upgrade Your <span className="text-primary">Skills</span> Today
            </h1>
            <p className="py-6 text-base-content/70 text-lg">
              Learn from industry experts and master the tools used by
              world-class teams. Start your journey toward a better career with
              our certified paths.
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <button className="btn btn-primary px-8">Get Started</button>
              <button className="btn btn-outline">View All Courses</button>
            </div>

            <div className="mt-8 flex items-center gap-4 text-sm opacity-70 justify-center lg:justify-start">
              <div className="avatar-group -space-x-4">
                <div className="avatar w-8 border-base-100">
                  <img src="https://i.pravatar.cc/100?img=1" alt="user" />
                </div>
                <div className="avatar w-8 border-base-100">
                  <img src="https://i.pravatar.cc/100?img=2" alt="user" />
                </div>
                <div className="avatar w-8 border-base-100">
                  <img src="https://i.pravatar.cc/100?img=3" alt="user" />
                </div>
              </div>
              <p>Joined by 10k+ students</p>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
              className="w-full max-w-md rounded-2xl shadow-xl"
              alt="Learning illustration"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
