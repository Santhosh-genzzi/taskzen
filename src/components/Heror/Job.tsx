import SectionHeader from "../ui/SectionHeader";
import JobCard from "./JobCard";

const jobs = [
  {
    id: 1,
    image: "jobsearch.jpg",
    title: "Senior Product Designer",
    location: "Madurai, Tamil Nadu",
    jobType: "Software developer",
    urgency: "Apply",
  },
  {
    id: 2,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG46xBXVD3JcgrNEoSgSB4iNlWq1qZbtSgbDpprVcmog&s=10",
    title: "MERN STACK DEVELOPMENT",
    location: "MADURAI, Tamil Nadu",
    jobType: "software developer",
    urgency: "Apply",
  },
  {
    id: 3,
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiIo7-5MK1sveEoAwO-IU55S2dRlc0qAq0Bg_XKaiw7g&s=10",
    title: "AI/MI INTERN",
    location: "Chennai, Tamil Nadu",
    jobType: "software developer",
    urgency: "Apply",
  },
  {
    id: 4,
    image: "https://img.magnific.com/free-vector/web-development-isometric-concept-composition-illustration_1284-55922.jpg?semt=ais_hybrid&w=740&q=80",
    title: "PROGRAMING COURSES",
    location: "Chennai, Tamil Nadu",
    jobType: "software developer",
    urgency: "Apply",
  },
];

const Job = () => {
  return (
    <section className="py-10 px-2 sm:px-4 lg:px-8">
      <SectionHeader
        badge="Featured Jobs"
        title="Find and Explore Your Future"
        description="Know your worth and find the jobs that qualify your life."
      />

      <div  data-aos="fade-up"
  data-aos-delay="100"
  data-aos-anchor-placement="top-center" className="max-w-7xl mx-auto mt-16 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <div   data-aos="fade-up"
  data-aos-delay="100"
  data-aos-anchor-placement="top-center"className="mt-10 text-center">
        <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all duration-300">
          Load More Listing
        </button>
      </div>
    </section>
  );
};

export default Job;