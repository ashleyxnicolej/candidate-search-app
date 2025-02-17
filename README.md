<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

* [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md), which uses [Babel](https://babeljs.io/) for Fast Refresh
* [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc), which uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you're developing a production application, we recommend updating the configuration to enable type-aware lint rules:

* Configure the top-level `parserOptions` property as follows:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

* Replace `plugin:@typescript-eslint/recommended` with `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`.
* Optionally, add `plugin:@typescript-eslint/stylistic-type-checked`.
* Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` and `plugin:react/jsx-runtime` to the `extends` list.

---
© 2024 edX Boot Camps LLC. Confidential and Proprietary. All Rights Reserved.
=======
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
>>>>>>> 3f3e6b4 (Create README.md)
