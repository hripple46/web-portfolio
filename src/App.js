import "./App.css";
import ProfilePic from "./img/IMG_0040_Export_3.png";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between  bg-gray-500 h-16"></nav>
      <div className="h-screen md-16 border-b-4 flex items-center justify-evenly">
        <img className="h-1/2 w-auto mt-16" src={ProfilePic} alt="Profile" />
        <div>
          <h1 className="text-4xl text-white">Hi, I'm Henry</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
