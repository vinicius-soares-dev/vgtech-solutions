import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frutaqui from "./pages/frutaqui";
import PortalOsorio from "./pages/portalOsorio";
import BpoSite from "./pages/bpoFinanceiro";
import JISystem from "./pages/jiSystem";
import PageUnderConstruction from "./components/PageConstruction";
import Contact from "./pages/contactPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<PageUnderConstruction />} />
        <Route path="/blog" element={<PageUnderConstruction />} />
        <Route path="/contatos" element={<Contact />} />
        <Route path="/area51" element={<PageUnderConstruction />} />
        <Route path="/admin" element={<PageUnderConstruction />} />
        <Route path="/projects/frutaqui" element={<Frutaqui />} />
        <Route path="/projects/portal-osorio" element={<PortalOsorio />} />
        <Route path="/projects/alemdacontabilidade" element={<BpoSite />} />
        <Route path="/projects/control-system" element={<JISystem />} />
      </Routes>
    </Router>
  )
}

export default App;