import Image from "next/image";
import Link from "next/link";

const CourseCard = ({ course }) => {
  const { image, title, instructor, rating, trending, level ,id} = course;
  return (
    <div className="card bg-base-100 shadow-xl border border-base-200 hover:shadow-2xl transition-all duration-300">
      <figure className="px-4 pt-4">
        <Image
          src={image}
          alt={title}
          className="rounded-xl h-48 w-full object-cover"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h3 className="card-title text-lg">{title}</h3>
          {trending && <div className="badge badge-secondary">Trending</div>}
        </div>
        <p className="text-sm text-base-content/70">
          Instructor: <span className="font-semibold">{instructor}</span>
        </p>

        <div className="flex items-center gap-2 mt-2">
          <div className="rating rating-sm">
            {[1, 2, 3, 4, 5].map((star) => (
              <input
                key={star}
                type="radio"
                name={`rating-${title.split(" ").join("")}`}
                className="mask mask-star-2 bg-orange-400"
                defaultChecked={star === Math.round(rating)}
                disabled
              />
            ))}
          </div>
          <span className="text-sm font-bold">{rating}</span>
          <span className="text-xs text-base-content/50">({level})</span>
        </div>

        <div className="card-actions justify-end mt-4 pt-4 border-t border-base-100">
        <Link href={`/allcourses/${id}`}>
          <button className="btn btn-primary btn-block">View Details</button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
