import { useState } from "react";

export default function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex space-x-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`text-3xl cursor-pointer ${
            (hover || rating) >= star ? "text-yellow-500" : "text-gray-400"
          }`}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(rating)}
          onClick={() => setRating(star)}
        >
          ★
        </span>
      ))}
      <p className="ml-2">Rating: {rating}</p>
    </div>
  );
}
