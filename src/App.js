import "./App.css";
import ProfilePic from "./img/IMG_0040_Export_4.png";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between  bg-gray-500 h-16"></nav>
      <div className="h-screen md-16 border-b-4 flex items-center justify-evenly">
        <div className="h-3/5 relative">
          <img className="h-full w-auto" src={ProfilePic} alt="Profile" />
          <div className="absolute h-16 w-32 bg-blue-400 rounded-md top-0 -left-8 animate-bounce"></div>
          <div className="absolute h-16 w-32 bg-blue-400 rounded-md bottom-0 -left-8 animate-bounce"></div>
          <div className="absolute h-16 w-32 bg-blue-400 rounded-md  -right-8 top-2/4 animate-bounce"></div>
        </div>
        <div>
          <h1 className="text-4xl text-white">Hi, I'm Henry</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
