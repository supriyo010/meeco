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
        className="w-screen h-screen overflow-y-auto select-none"
      >
        <Navbar scrollToBottom={scrollToBottom} scrollToTop={scrollToTop} />
        <Routes>
          <Route
            path="/"
            Component={() => {
              return <Home scrollToTop={scrollToTop} />;
            }}
          />
          <Route path="/gallery" Component={Gallery} />
          <Route
            path="/projects"
            Component={() => {
              return <Projects scrollToTop={scrollToTop} />;
            }}
          />
          <Route path="/project/:id" Component={Project} />
          <Route path="/certifications" Component={Certifications} />
          <Route path="/about" Component={About} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
