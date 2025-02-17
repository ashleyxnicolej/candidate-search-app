import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CandidateSearch from "./pages/CandidateSearch";
import SavedCandidates from "./pages/SavedCandidates";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Search Candidates</Link> | 
        <Link to="/saved">Saved Candidates</Link>
      </nav>
      <Routes>
        <Route path="/" element={<CandidateSearch />} />
        <Route path="/saved" element={<SavedCandidates />} />
      </Routes>
    </Router>
  );
}

export default App;
