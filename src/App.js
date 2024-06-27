import "./App.css";
import Gallery from "./components/gallery";
import Home from "./components/home";
import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Projects from "./components/projects";
import Certifications from "./components/certifications";
import Project from "./components/project";
import Footer from "./components/footer";
import { useRef } from "react";
import About from "./components/about";

import Carousel from "./components/Carousel";
import Service from "./components/Service";
import Block5 from "./components/home/Block5";
import cont from "./components/Cont";
import Cont from "./components/Cont";





function App() {
  const contentRef = useRef();

  const scrollToBottom = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  };

  const scrollToTop = () => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  };

  return (
    <Router>
      <div
        ref={contentRef}
        className="w-screen h-screen overflow-y-auto select-none overflow-x-clip p-0 m-0"
        style={{ margin: 0, padding: 0 }}
      >
        <Navbar scrollToBottom={scrollToBottom} scrollToTop={scrollToTop} />
        <Routes>
          <Route
            path="/"
            element={<Home scrollToTop={scrollToTop} />}
          />
          <Route path="/co" element={<Carousel />} />
          <Route path="/ser" element={<Service />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route
            path="/projects"
            element={<Projects scrollToTop={scrollToTop} />}
          />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/about" element={<About />} />
          <Route path="/block" element={<Block5 />} />
          <Route path="/cont" element={<Cont/>} />

        </Routes>
        <Footer />
      </div>
    </Router>
  );
}


export default App;
