import "./App.css";
import ProfilePic from "./img/IMG_0040_Export_2.png";

function App() {
  return (
    <div className="bg-gray-800 h-full">
      <div className="h-screen">
        <nav className="fixed top-0 left-0 right-0 flex items-center justify-between  bg-gray-500 h-16"></nav>
        <div className="h-screen">
          <img className="h-1/2 w-auto mt-16" src={ProfilePic} alt="Profile" />
        </div>
      </div>
    </div>
  );
}

export default App;
