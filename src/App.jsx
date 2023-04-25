import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Typewriter from "typewriter-effect";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className="main-wrapper">
        <div>
          <h1>
            Hi!
            <br />I Am Piyush Negi
          </h1>
          <Typewriter
            options={{
              strings: ["Aspiring Sofware Developer", "Skilled in MERN Stack", "UI/UX Designer"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        
        <div></div>
      </div>
    </div>
  );
}

export default App;
