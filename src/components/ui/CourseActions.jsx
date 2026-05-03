"use client";
import { toast } from "react-toastify";

const CourseActions = ({ courseTitle }) => {
  const handleEnroll = () => {
    toast.success(`Successfully enrolled in ${courseTitle}!`);
  };

  const handleWishlist = () => {
    toast.info(`${courseTitle} Added to your wishlist`);
  };

  return (
    <div>
      <button onClick={handleEnroll} className="btn btn-primary btn-block mb-3">
        Enroll Now
      </button>
      <button onClick={handleWishlist} className="btn btn-outline btn-block">
        Add to Wishlist
      </button>
    </div>
  );
};

export default CourseActions;
