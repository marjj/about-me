import "./App.css";
import Me from "./components/Me";

function App() {
  return (
    <div className="w-screen h-screen max-w-4xl mx-auto items-center gap-4 text-gray-100">
      
      <div className="grid grid-cols-2 h-screen">
        <div className="flex flex-col justify-center items-center p-2 relative after:content-[''] after:block after:absolute before:top-[50%] after:w-[2px] after:rounded-xl after:h-[100px] after:bg-gray-400 after:right-[10%]">
          <div className="relative h-[200px]">
            <Me />
          </div>
          <div className="h-24 text-center">
            <h1 className="text-2xl font-bold">Hi, there!</h1>
          </div>
        </div> 

        <div className="overflow-y-auto">
          <div className="p-2 h-screen flex flex-col justify-center">
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
        </div>
      </div>
    </div>
  );
}

export default App;
