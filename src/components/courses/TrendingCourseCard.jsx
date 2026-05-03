import Image from "next/image";
import Link from "next/link";
import TrendingCourses from "../home/TrendingCourses";
import { GoStarFill } from "react-icons/go";

const TrendingCoursesCard = ({ tc }) => {
  const { image, title, instructor, rating, id } = tc;
  return (
    <div className="card bg-base-100 shadow-sm border border-base-300 hover:border-primary transition-colors">
      <figure className="h-32">
        <Image
          src={image}
          alt={title}
          className="rounded-xl h-48 w-full object-cover"
          width={400}
          height={400}
        />
      </figure>
      <div className="card-body p-5">
        <div className="flex justify-between items-start mb-2">
          <div className="badge badge-secondary badge-sm font-bold">
            TRENDING
          </div>
        </div>
        <h3 className="font-bold text-md leading-tight h-10">{title}</h3>
        <p className="text-xs opacity-60">by {instructor}</p>

        <div className="divider my-2"></div>

        <div className="card-actions justify-between items-center">
          <span className="text-sm font-bold text-primary flex gap-2">
            <GoStarFill className="text-amber-400 w-5 h-5" /> {rating}
          </span>
          <Link href={`/allcourses/${id}`}>
            <button className="btn btn-primary btn-xs">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingCoursesCard;
