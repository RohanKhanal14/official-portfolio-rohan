import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { About, Header, Skill, Work, Contact } from "./container";
import "./App.scss";
function App() {
  return (
    <>
      <div className="app">
        <Router>
          {/* <Navbar /> */}
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/about" element={<About />} />
            <Route path="/skill" element={<Skill />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
