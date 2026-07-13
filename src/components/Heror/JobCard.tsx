import { BiBriefcase } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";

interface Props {
  job: {
    id: number;
    image: string;
    title: string;
    location: string;
    jobType: string;
    urgency: string;
  };
}

const JobCard = ({ job }: Props) => {
  return (
    <div className="relative w-full border border-gray-300 dark:border-gray-700 rounded-xl p-4 sm:p-6 overflow-hidden">
      {/* Bookmark */}
      <button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-200 dark:hover:bg-gray-800 transition-all duration-200">
        <BsBookmark className="w-4 h-4" />
      </button>

      {/* Top Section */}
      <div className="flex items-start gap-3">
        {/* Image */}
        <img
          src={job.image}
          alt={job.title}
          className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover flex-shrink-0"
        />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <h1 className="text-base sm:text-lg font-semibold leading-6 break-words">
            {job.title}
          </h1>

          {/* Company & Location */}
          <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-5">
            <div className="flex items-center gap-1 text-gray-500">
              <BiBriefcase className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm truncate">Segment</p>
            </div>

            <div className="flex items-center gap-1 text-gray-500">
              <GrLocation className="w-4 h-4 flex-shrink-0" />
              <p className="text-sm break-words">{job.location}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="mt-5 flex flex-wrap gap-3">
        <span className="px-4 py-1 bg-primary/30 dark:bg-primary/55 rounded-full text-xs font-medium">
          {job.jobType}
        </span>

        <span
          className={`px-4 py-1 rounded-full text-xs font-medium ${
            job.urgency === "urgent"
              ? "bg-primary text-white"
              : "bg-surface dark:text-gray-300"
          }`}
        >
          {job.urgency}
        </span>
      </div>
    </div>
  );
};

export default JobCard;