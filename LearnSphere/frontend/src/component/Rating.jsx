import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="d-flex justify-content-center mt-3">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;

        return (
          <FaStar
            key={starValue}
            size={40}
            onClick={() => setRating(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(0)}
            className="mx-1"
            style={{
              cursor: "pointer",
              color: starValue <= (hover || rating) ? "#ffcc00" : "#ccc",
              transition: "color 0.3s ease-in-out, text-shadow 0.3s ease-in-out",
              textShadow:
                starValue <= (hover || rating) ? "0 0 10px #ffcc00" : "none",
            }}
          />
        );
      })}
    </div>
  );
};

export default Rating;
