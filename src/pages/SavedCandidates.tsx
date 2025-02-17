import { useState, useEffect } from "react";

interface Candidate {
  name: string;
  login: string;
  location: string;
  avatar_url: string;
  email: string | null;
  html_url: string;
  company: string | null;
}

const SavedCandidates = () => {
  const [savedCandidates, setSavedCandidates] = useState<Candidate[]>([]);

  // Load saved candidates from localStorage
  useEffect(() => {
    const storedCandidates = localStorage.getItem("savedCandidates");
    if (storedCandidates) {
      setSavedCandidates(JSON.parse(storedCandidates));
    }
  }, []);

  // Remove a candidate from the list
  const handleRemove = (login: string) => {
    const updatedList = savedCandidates.filter((c) => c.login !== login);
    setSavedCandidates(updatedList);
    localStorage.setItem("savedCandidates", JSON.stringify(updatedList));
  };

  return (
    <div>
      <h1>Saved Candidates</h1>
      {savedCandidates.length === 0 ? (
        <p>No candidates have been saved.</p>
      ) : (
        <ul>
          {savedCandidates.map((candidate) => (
            <li key={candidate.login}>
              <img src={candidate.avatar_url} alt={candidate.name} width="50" />
              <h2>{candidate.name || "No Name Available"}</h2>
              <p>Username: {candidate.login}</p>
              <p>Location: {candidate.location || "Not provided"}</p>
              <p>Email: {candidate.email || "Not available"}</p>
              <p>Company: {candidate.company || "Not available"}</p>
              <a href={candidate.html_url} target="_blank" rel="noopener noreferrer">
                GitHub Profile
              </a>
              <button onClick={() => handleRemove(candidate.login)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SavedCandidates;
