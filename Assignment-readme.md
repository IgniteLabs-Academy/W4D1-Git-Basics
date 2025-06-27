# Week 4 - Day 1: Vite + React Basics

## 🧠 Real-World Scenario
You are tasked with setting up a modern React project using Vite, and organizing your code with reusable components from Day 1.

## 🎯 Assignment Overview

1. Set up a Vite app in a folder named `./Week04/Day01/`.
2.  check the `vite-terminal-setup.png` file in this folder to select the correct options.  After running cmd `npm create vite@latest` in terminal.
3. Now follow the steps below(these are important to make your test cases work):
   - run cmd `npm pkg set scripts.test="jest"`
   - run cmd `npm pkg set devDependencies.jest="^29.0.0" devDependencies.jsdom="^22.1.0"`
   - Now Check the `edit-package-json.png` file in this folder for reference. And make sure 3 changes are added to package.json
4.  create `src/components` folder and make sure it ontains both `Header.jsx` and `Footer.jsx` files.
5. The `src/App.jsx` file imports both `Header` and `Footer` from the `src/components` folder using import statements (e.g., `import Header from './components/Header'`).



## 📁 Folder Structure
Your project should be inside a folder named `./Week04/Day01/`:

```
Week04/
  Day01/
    node_modules/
    public/
    src/
      components/
        Header.jsx
        Footer.jsx
      App.jsx
      main.jsx
    package.json
    ...other Vite files
```

## 🧪 Testing & Scoring
- There will be 5 test cases for this assignment:
  1. The `src/components` folder exists and contains both `Header.jsx` and `Footer.jsx` files.
  2. The `vite.config.js` file is present in the project root directory.
  3. The `.gitignore` file is present in the project root directory.
  4. The `src/App.jsx` file imports both `Header` and `Footer` from the `src/components` folder using import statements (e.g., `import Header from './components/Header'`).
  5. The `package.json` file lists `vite` as a dependency or devDependency.
