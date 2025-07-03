
# 📝 Keeper App

A simple and elegant React-based note-taking web application inspired by Google Keep. Users can add, view, and delete notes seamlessly using an intuitive UI built with modern tools.

--- http://192.168.11.68:3000

## 🌐 Live Demo

> [View the App]

---

## 🚀 Features

- ✅ Add and delete notes dynamically  
- ✅ Reusable React components  
- ✅ Responsive design for all screen sizes  
- ✅ Alert on empty note submission  
- ✅ Clean and minimal UI  
- ✅ Styled using Bootstrap classes for consistency and ease

---

## 🛠️ Tech Stack

| Technology    | Purpose                        |
|---------------|--------------------------------|
| React.js      | Frontend framework             |
| JavaScript    | Logic and interactivity        |
| Bootstrap     | Styling and responsive design  |
| HTML & CSS    | Structure and layout           |
| Git & GitHub  | Version control and hosting    |

---

## 📁 Folder Structure

\`\`\`
keeper/
├── public/
│   └── index.html
├── src/
│   ├── App.js
│   ├── Header.js
│   ├── Footer.js
│   ├── Note.js
│   ├── CreateArea.js
│   ├── notes.js
│   ├── styles.css
│   └── index.js
└── package.json
\`\`\`

---

## 🧠 Challenges Faced

### 1. \`TypeError: notes.map is not a function\`
**Cause:** \`notes\` was imported incorrectly or overwritten by \`useState\`.  
**Fix:** Rename the \`import notes from './notes'\` or the \`useState\` variable to avoid name clashes.

### 2. React-Scripts/AJV Error in Local Setup  
**Error:** \`Cannot find module 'ajv/dist/compile/codegen'\`  
**Fix:**  
\`\`\`bash
npm install ajv@8.11.0 --legacy-peer-deps
\`\`\`

---

## 🧪 How to Run Locally

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/your-username/Keeper-App-Project.git
   \`\`\`

2. Navigate into the project folder:
   \`\`\`bash
   cd Keeper-App-Project
   \`\`\`

3. Install dependencies:
   \`\`\`bash
   npm install --legacy-peer-deps
   \`\`\`

4. Start the development server:
   \`\`\`bash
   npm start
   \`\`\`

---

## 🙋‍♂️ Author

**Krushna Borude**  

