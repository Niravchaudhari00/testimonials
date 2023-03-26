import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"
import { useState } from "react";
const Testimonials = (props) => {
     const reviews = props.data;
     console.log(reviews);
     const [index, setIndex] = useState(0);
     
     // Shift-left
     const shiftLeftHandler = () => {
          if (index - 1 < 0) {
               setIndex(reviews.length - 1);
          } else {
               setIndex(index - 1);
          }
     }

     // Shift-Right
     const shiftRightHandler = () => {
          if (index + 1 >= reviews.length) {
               setIndex(0);
          } else {
               setIndex(index + 1);
          }
     }

     // Random review
     const surpriseHandler = () => {
          setIndex(Math.floor(Math.random() * 5));
     }
    
     return (
          <div className="border border-gray-100 w-10/12 max-w-[700px] flex flex-col items-center mx-auto bg-slate-50 shadow-md rounded-md mt-5">

               <Card reviews={reviews[index]} />

               <div className="py-5">
                    <button
                         onClick={shiftLeftHandler}
                         className="text-violet-500 hover:text-violet-600">
                         <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                         onClick={shiftRightHandler}
                         className="text-violet-500 hover:text-violet-600">
                         <FiChevronRight className="text-2xl" />
                    </button>
               </div>

               <div className="mb-5">
                    <button
                         onClick={surpriseHandler}
                         className="bg-blue-700 rounded-md hover:bg-blue-600 font-bold text-gray-200 px-3 py-2 transition-all duration-300">Surprise Me</button>
               </div>

          </div>
     );
}

export default Testimonials;