const HeroSlider = () => {
    return (
        <div className="hero bg-base-100 min-h-[60vh] border-b border-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse gap-12 px-6">
    
    <div className="relative">
      <div className="absolute -top-4 -left-4 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      <img
        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
        className="max-w-sm rounded-2xl shadow-2xl border-4 border-base-100 relative z-10"
        alt="Learning illustration"
      />
    </div>

    <div className="max-w-xl text-center lg:text-left">
      <div className="badge badge-secondary badge-outline mb-4 gap-2 py-3 px-4">
        NEW COURSES AVAILABLE
      </div>
      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
        Upgrade Your <span className="text-primary">Skills</span> Today
      </h1>
      <p className="py-6 text-lg text-base-content/70">
        Learn from industry experts and master the tools used by world-class teams. 
        Start your journey toward a better career with our certified paths.
      </p>
      <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
        <button className="btn btn-primary px-8">Get Started</button>
        <button className="btn btn-ghost border-base-300">View All Courses</button>
      </div>
      
      <div className="mt-8 flex items-center gap-4 text-sm opacity-60 justify-center lg:justify-start">
         <div className="avatar-group -space-x-4 rtl:space-x-reverse">
          <div className="avatar border-base-100 w-8">
            <img src="https://i.pravatar.cc/100?img=1" />
          </div>
          <div className="avatar border-base-100 w-8">
            <img src="https://i.pravatar.cc/100?img=2" />
          </div>
          <div className="avatar border-base-100 w-8">
            <img src="https://i.pravatar.cc/100?img=3" />
          </div>
        </div>
        <p>Joined by 10k+ students</p>
      </div>
    </div>

  </div>
</div>
    );
};

export default HeroSlider;