import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import Career from "./pages/career/Career";
import Web from "./pages/services/Web";
import SoftwareSupport from "./pages/services/SoftwareSupport";
import TeamAug from "./pages/services/TeamAug";
import SoftwareSourcing from "./pages/services/SoftwareSourcing";
import Mobile from "./pages/services/Mobile";
import NewProject from "./pages/project/NewProject";
import Privacy from "./pages/privacy/Privacy";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="about" element={<About />}></Route>
      <Route path="contact" element={<Contact />}></Route>
      <Route path="software" element={<SoftwareDevelopment />}></Route>
      <Route path="career" element={<Career />}></Route>
      <Route path="web" element={<Web />}></Route>
      <Route path="support" element={<SoftwareSupport />}></Route>
      <Route path="teamaug" element={<TeamAug />}></Route>
      <Route path="outsourcing" element={<SoftwareSourcing />}></Route>
      <Route path="mobile" element={<Mobile />}></Route>
      <Route path="project" element={<NewProject />}></Route>
      <Route path="privacy" element={<Privacy />}></Route>
    </Routes>
  );
}

export default App;
