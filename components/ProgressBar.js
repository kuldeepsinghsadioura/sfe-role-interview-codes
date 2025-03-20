import { useState } from "react";

export default function ProgressBar() {
  const [progress, setProgress] = useState(0);

  const increaseProgress = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  return (
    <div className="w-full max-w-sm mx-auto p-4">
      <div className="w-full bg-gray-300 h-6 rounded-lg overflow-hidden">
        <div
          className="h-full bg-blue-500 transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <p className="text-center mt-2">{progress}% Completed</p>
      <button
        onClick={increaseProgress}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg w-full"
      >
        Increase Progress
      </button>
    </div>
  );
}
