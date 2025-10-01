import "./App.css";
import Me from "./components/Me";

function App() {
  return (
    <div className="w-screen h-screen overflow-hidden max-w-4xl mx-auto items-center gap-4 text-gray-100 bg-gray-800 justify-center flex flex-col">
      
      <div className="h-3/4 md:h-1/2 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 bg-pink-500 p-4">
        <div className="bg-orange-400 flex flex-col justify-center items-center p-2 relative after:content-[''] after:block after:absolute before:top-[50%] after:w-[2px] after:rounded-xl after:h-[100px] after:bg-gray-400 after:right-[10%]">
          <div className="relative h-[200px]">
            <Me />
          </div>
          <div className="h-24 text-center">
            <h1 className="text-2xl font-bold">Hi, there!</h1>
          </div>
        </div> 

        <div className="h-full bg-red-500 md:my-auto overflow-y-auto">
          <div className="bg-gray-800 mx-4 p-4 rounded-lg h-full overflow-y-auto">
            <p className="text-lg">
              I'm <span className="text-pink-400 font-bold">Marjo</span>, a software engineer based in the <span className="text-cyan-400 font-bold">Philippines.</span>
            </p>
             <p className="text-lg mt-2">
              I love building web applications and learning new technologies.
              When I'm not coding, I enjoy reading books, watching movies, and
              exploring new places.
            </p>
            <p className="text-sm italic font-bold mt-4">And I let AI write this for me.</p>
          </div>
          <div className="bg-gray-800 mx-4 p-4 rounded-lg h-full overflow-y-auto">
            lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
          </div>
        </div>
      </div>

      <div className="bg-green-500 text-white">
        here
      </div>
    </div>
  );
}

export default App;
