import Testimonials from "./components/Testimonials";
import data from "./data.js"
function App() {
  return (
    <div className="App w-[100vw] h-[100vh] bg-blue-100">
      <div className="text-center py-10">
        <h1 className="font-bold text-gray-700 text-4xl">Our Testimonials
        </h1>
        <div className="w-[100px] h-[5px] bg-blue-600 mx-auto"></div>
        
      </div>

      <Testimonials data={data} />
    </div>
  );
}

export default App;
