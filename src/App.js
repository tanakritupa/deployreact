import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";

function App() {
  const isMobile = window.innerWidth < 768;
  return (
    <Router>
      <Navbar isMobile={isMobile} />
      <Routes>
        <Route path="/" element={<HomePage isMobile={isMobile} />} />
        <Route path="/about" element={<AboutUsPage isMobile={isMobile} />} />
        <Route
          path="/contact"
          element={<ContactUsPage isMobile={isMobile} />}
        />
      </Routes>
      <Footer isMobile={isMobile} />
    </Router>
  );
}

export default App;
