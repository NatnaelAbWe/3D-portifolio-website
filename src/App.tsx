import "./styles/index.css";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experiance,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Work,
  StarsCanvas,
  CanvasLoader,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary text-white">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experiance />
          <Tech />
          <Work />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
