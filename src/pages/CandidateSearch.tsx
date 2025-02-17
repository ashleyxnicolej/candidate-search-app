import { useState, useEffect } from "react";
import { searchGithubUser } from "../api/API";

interface Candidate {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  email: string | null;
  html_url: string;
  company: string | null;
}

const CandidateSearch = () => {
  const [candidate, setCandidate] = useState<Candidate | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>(() => {
    const stored = localStorage.getItem("savedCandidates");
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    fetchCandidate();
  }, []);

  const fetchCandidate = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await searchGithubUser();
      setCandidate(data);
    } catch (err) {
      setError("Failed to fetch candidate.");
    } finally {
      setLoading(false);
    }
  };

  const handleAccept = () => {
    if (candidate) {
      const updatedList = [...savedCandidates, candidate];
      setSavedCandidates(updatedList);
      localStorage.setItem("savedCandidates", JSON.stringify(updatedList));
    }
    fetchCandidate();
  };

  const handleReject = () => {
    fetchCandidate();
  };

  return (
    <div>
      <h1>Candidate Search</h1>

      {loading && <p>Loading candidate...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {candidate ? (
        <div>
          <img src={candidate.avatar_url} alt={candidate.name} width="100" />
          <h2>{candidate.name || "No Name Available"}</h2>
          <p>Username: {candidate.login}</p>
          <p>Location: {candidate.location || "Not provided"}</p>
          <p>Email: {candidate.email || "Not available"}</p>
          <p>Company: {candidate.company || "Not available"}</p>
          <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
            GitHub Profile
          </a>
          <br />
          <button onClick={handleAccept}>✔ Accept</button>
          <button onClick={handleReject}>❌ Reject</button>
        </div>
      ) : (
        <p>No more candidates available.</p>
      )}
    </div>
  );
};

export default CandidateSearch;
