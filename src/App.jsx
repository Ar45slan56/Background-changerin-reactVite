import { useState } from "react";


function App() {
  const [color, setcolor] = useState("Yellow");
  return (
    <div
      className="w-full h-screen   duration-700"
      style={{ backgroundColor: color }}
    >

      {/* bottom bar style  Red*/}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        {/* button Style */}
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-4 rounded-2xl">
            <button className="outline-none px-4 py-2 jus rounded-md text-white bg-red-500" onClick={()=> setcolor("red")}>
              Red
            </button>

             {/* button Style blue */}
             <button className="outline-none px-4 py-2 jus rounded-md text-white bg-blue-500" onClick={()=> setcolor("blue")}>
              Blue
            </button>

            {/* button Style Gray */}
            <button className="outline-none px-4 py-2 jus rounded-md text-white bg-gray-500" onClick={()=> setcolor("gray")}>
              Gray
            </button>

            {/* button Style Green */}
            <button className="outline-none px-4 py-2 jus rounded-md text-white bg-green-500" onClick={()=> setcolor("green")}>
              Green
            </button>

            {/* button Style purple */}
            <button className="outline-none px-4 py-2 jus rounded-md text-white bg-fuchsia-950" onClick={()=> setcolor("purple")}>
            Purple
            </button>
        </div>
      </div>
      
       


    </div>
  );
}

export default App;
