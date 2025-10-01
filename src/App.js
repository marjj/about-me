import Me from "./components/Me";

function App() {
  return (
    <div className="text-indigo-900 w-screen h-screen overflow-hidden max-w-4xl mx-auto items-center gap-4 text-gray-100 justify-center flex flex-col">
      
      <div className="h-3/4 md:h-1/2 grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 p-4">
        <div className="flex flex-col justify-center items-center p-2 relative after:content-[''] after:block after:absolute before:top-[50%] after:w-[2px] after:rounded-xl after:h-[100px] after:bg-pink-500 after:right-[10%]">
          <div className="relative h-[200px] w-[200px] rounded-3xl">
            <div className="bg-indigo-500 w-full h-20 rounded-3xl absolute bottom-0"/>
            <Me />
          </div>
          <div className="h-24 text-center mt-6">
            <h1 className="text-2xl font-bold">Marjo A.</h1>
            <h2 className="text-sm font-semibold uppercase">SOFTWARE engineer</h2>
          </div>
        </div> 

        <div className="h-full md:my-auto overflow-y-auto">
          <div className="flex mx-4 p-4 rounded-lg h-full overflow-y-auto">
            <div className="content-container my-auto block">
              <p className="text-lg">
                I'm <span className="text-pink-500 font-bold">Marjo</span>, a software engineer based in the <span className="text-indigo-800 font-bold">Philippines.</span>
              </p>
              <p className="text-lg mt-2">
                I love building web applications and learning new technologies.
                When I'm not coding, I enjoy reading books, watching movies, and
                exploring new places.
              </p>
              <p className="text-sm italic font-bold mt-4">And I let AI write this for me.</p>
            </div>
          </div>
          <div className="flex mx-4 p-4 rounded-lg h-full overflow-y-auto">
            <div className="my-auto block">
              <p className="text-lg font-bold">Skills:</p>
              <ul className="list-disc list-inside text-sm">
                <li>JavaScript (ES6+)</li>
                <li>Ui Frameworks (React / Vue)</li>
                <li>Node.js</li>
                <li>PHP</li>
                <li>SQL & NoSQL Databases</li>
                <li>Git & Version Control</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-4">
        <span>LinkedIn</span>
        <span>GitHub</span>
        <span>Twitter</span>
        <span>Gmail</span>
      </div>
    </div>
  );
}

export default App;
