const LearningTips = () => {
    return (
      <div className="bg-base-200">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10">
            Learning Tips
          </h2>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="card bg-base-200 w-full shadow-md">
              <div className="card-body">
                <h3 className="card-title text-primary text-2xl">
                  Study Techniques
                </h3>
                <ul className="list-disc list-inside space-y-3 mt-2">
                  <li>
                    <strong>Feynman Technique:</strong> Explain what you learned
                    to someone else in simple words.
                  </li>
                  <li>
                    <strong>Active Recall:</strong> Test yourself with questions
                    instead of just reading.
                  </li>
                  <li>
                    <strong>Flashcards:</strong> Use cards to remember hard
                    definitions or code snippets.
                  </li>
                </ul>
              </div>
            </div>

            <div className="card bg-base-200 w-full shadow-md">
              <div className="card-body">
                <h3 className="card-title text-secondary text-2xl">
                  Time Management
                </h3>
                <ul className="list-disc list-inside space-y-3 mt-2">
                  <li>
                    <strong>Pomodoro:</strong> Study for 25 minutes, then take a
                    5-minute break.
                  </li>
                  <li>
                    <strong>To-Do Lists:</strong> Write down your top 3 tasks
                    every morning.
                  </li>
                  <li>
                    <strong>No Distractions:</strong> Put your phone away during
                    deep study hours.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default LearningTips;