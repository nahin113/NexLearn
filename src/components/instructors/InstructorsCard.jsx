import Image from "next/image";

const InstructorsCard = ({ instructor: instructorData }) => {
  const { instructor, category, rating} = instructorData;
  return (
    <div className="card bg-base-200 shadow-sm hover:shadow-md transition-shadow border border-base-300">
      <div className="card-body items-center text-center">
        <div className="avatar mb-2">
          <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <Image
              src={instructorData?.instructorImage}
              alt={instructor}
              height={300}
              width={300}
            />
          </div>
        </div>
        <h3 className="card-title text-xl">{instructor}</h3>
        <div className="badge badge-primary badge-sm">{category}</div>
        <div className="flex items-center gap-1 mt-3 text-sm font-semibold">
          <span>⭐ {rating} Rating</span>
        </div>
      </div>
    </div>
  );
};

export default InstructorsCard;
