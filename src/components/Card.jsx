import { FaQuoteLeft , FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
     const reviewData = props.reviews;
     console.log("reviewData : ",reviewData);
     return (
          <div className="p-5 relative">

               <img
                    src={reviewData.image}
                    width="100px"
                    height="100px"
                    alt=""
                    className="absolute top-[-50px] left-10 rounded-full z-10"
               />
               <div className="h-[105px] w-[105px] absolute top-[-55px] rounded-full left-10  bg-violet-500 "></div>

               <div className="flex flex-col items-center my-5">
                    <p className="text-3xl font-bold text-gray-800">{ reviewData.name}</p>
                    <p className="text-gray-600 text-lg">{ reviewData.job}</p>
               </div>

               <div className="description flex flex-col gap-3 items-center px-10">
                    <FaQuoteLeft className="text-blue-400" />
                    <p className="text-center text-gray-700">{ reviewData.text }</p>
                    <FaQuoteRight className="text-blue-400"/>
               </div>
          </div>
     );
}
export default Card;