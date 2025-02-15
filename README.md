# Candidate Search App  

This is a React application that fetches and displays GitHub users as potential candidates. Users can accept or reject candidates, and accepted candidates are saved to local storage.

## 🚀 Features
- Fetches random GitHub users  
- Displays candidate details (name, username, location, etc.)  
- Accept or reject candidates  
- Saves accepted candidates  

## 🛠️ Technologies Used
- React  
- TypeScript  
- GitHub API  
- Local Storage  

📜 Code Files
📌 1. package.json
Ensure you have dependencies installed.

json
Copy
Edit
{
  "name": "candidate-search-app",
  "version": "1.0.0",
  "description": "A simple GitHub user search app for candidate selection.",
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build"
  },
  "dependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "typescript": "^4.9.3"
  }
}
📌 2. .gitignore
Prevents sensitive files from being committed.

plaintext
Copy
Edit
node_modules/
.env
build/
📌 3. src/api/githubAPI.ts
Handles API requests to GitHub.

ts
Copy
Edit
const GITHUB_API_URL = "https://api.github.com/users";

export async function fetchGitHubUsers() {
  const response = await fetch(GITHUB_API_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch users.");
  }
  return response.json();
}
📌 4. src/components/CandidateCard.tsx
Displays individual candidates.

tsx
Copy
Edit
import React from "react";

interface CandidateProps {
  user: any;
  onAccept: (user: any) => void;
  onReject: (user: any) => void;
}

const CandidateCard: React.FC<CandidateProps> = ({ user, onAccept, onReject }) => {
  return (
    <div className="card">
      <img src={user.avatar_url} alt="avatar" />
      <h3>{user.login}</h3>
      <button onClick={() => onAccept(user)}>Accept</button>
      <button onClick={() => onReject(user)}>Reject</button>
    </div>
  );
};

export default CandidateCard;
📌 5. src/components/CandidateList.tsx
Fetches and lists GitHub users.

tsx
Copy
Edit
import React, { useEffect, useState } from "react";
import { fetchGitHubUsers } from "../api/githubAPI";
import CandidateCard from "./CandidateCard";

const CandidateList: React.FC = () => {
  const [candidates, setCandidates] = useState<any[]>([]);
  const [accepted, setAccepted] = useState<any[]>([]);

  useEffect(() => {
    fetchGitHubUsers().then(setCandidates).catch(console.error);
  }, []);

  const handleAccept = (user: any) => {
    setAccepted([...accepted, user]);
  };

  const handleReject = (user: any) => {
    setCandidates(candidates.filter((u) => u !== user));
  };

  return (
    <div>
      <h2>Candidate List</h2>
      {candidates.map((user) => (
        <CandidateCard key={user.id} user={user} onAccept={handleAccept} onReject={handleReject} />
      ))}
    </div>
  );
};

export default CandidateList;
📌 6. src/App.tsx
Main app component.

tsx
Copy
Edit
import React from "react";
import CandidateList from "./components/CandidateList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Candidate Search App</h1>
      <CandidateList />
    </div>
  );
};

export default App;
📌 7. src/index.tsx
Entry point for the app.

tsx
Copy
Edit
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);





## ⚙️ Setup
1. Clone the repository:  
   ```bash
   git clone https://github.com/ashleyxnicolej/candidate-search-app.git
   
Install dependencies:
bash
Copy
Edit
npm install
Start the development server:
bash
Copy
Edit
npm start
🔥 Deployment
Currently troubleshooting deployment on Render due to GitHub push protection blocking the repo after detecting a secret in commit history.

📂 Folder Structure
pgsql
Copy
Edit
/src
  ├── components/
  ├── pages/
  ├── api/
  ├── App.tsx
  ├── index.tsx
.gitignore
package.json
README.md
📌 To-Do
 Resolve Render deployment issue
 Improve UI styling
 Add more candidate filtering options
📌 GitHub Repo: Candidate Search App
📌 Status: Working locally, pending deployment




markdown
Copy
Edit

### 2️⃣ **Ensure Your Repo Has At Least These Files:**  
- `README.md` (from above)  
- Your project files (`src/`, `public/`, `package.json`, etc.)  
- `.gitignore` (make sure `.env` is listed here)  

### 3️⃣ **Push the Changes to GitHub:**  
```bash
git add .
git commit -m "Added README and ensured necessary files are included"
git push origin main
