import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Frutaqui from "./pages/frutaqui";
import PortalOsorio from "./pages/portalOsorio";
import BpoSite from "./pages/bpoFinanceiro";
import JISystem from "./pages/jiSystem";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/frutaqui" element={<Frutaqui />} />
        <Route path="/projects/portal-osorio" element={<PortalOsorio />} />
        <Route path="/projects/alemdacontabilidade" element={<BpoSite />} />
        <Route path="/projects/control-system" element={<JISystem />} />
      </Routes>
    </Router>
  )
}

export default App;