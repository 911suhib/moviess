import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import MainPage from "./MainPage";
import Features from "./Features";
import Enterprize from "./Enterprize";
import Support from "./Support";

function App() {
  return (
    <Router>
    
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="support" element={<Support />} />
        <Route path="enterprise" element={<Enterprize />} />
        <Route path="features" element={<Features />} />
      </Routes>
      <Nav />
    </Router>
  );
}
export default App;
