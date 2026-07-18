import { GrLocation } from "react-icons/gr";

interface Props {
  data: {
    id: number;
    image: string;
    name: string;
    Locaation: string;
    position: string;
  };
}

const TopcompanyCard = ({ data }: Props) => {
  return <div className="flex flex-col items-center bg-gray-100 dark:bg-gray-800 rounded-lg p-6 m-3">
    <img src={data.image} alt={data.name}  className="w-15 h-15 object-cover rounded-full"/>
    <h1 className="text-lg font-medium mt-4 text-center text-gray-400 dark:text-gray-200">{data.name}</h1>
   <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center space-x-1 text-center justify-center mt-3">
    <GrLocation/>
    <p>{data.Locaation}</p>
   </div>
   <div className="px-10 py-3 bg-gray-700/10 cursor-pointer hover:bg-primary-800 transition-all duration-300 hover:text-white text-surface-300 dark:text-gray-200 rounded-lg mt-4 text-sm text-center">
   {data.position} open position
   </div>
  </div>;
};

export default TopcompanyCard;