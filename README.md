# Web Text App
A sleek and powerful text editing platform built using the MERN Stack. Easily submit, view, and manage user-generated content with smooth interaction and real-time updates all within a modern, minimal UI.
## Tech Stack
- **Frontend**: React.js  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB
## Live Demo
[Click Here](https://webtextapp.onrender.com)
## Features
- Play with your own text and also review your experience 
- Displays comments in real-time
- Enabled Dark Mode and switch easily between Light and Dark Mode
## Getting Started
> **Prerequisite:** Make sure MERN Stack is set up on your local PC properly.
### 1. Clone the repository
```bash
#Command to clone
git clone https://github.com/hrutavmodha/text-utility.git
cd .\text-utility
```
### 2. Install dependencies for both client and server
```bash
#Command to install the project dependencies in frontend and backend folders seperately
cd .\frontend
npm install
cd ..
cd .\backend
npm install
```
### 3. Install `concurrently` and `nodemon` in the root directory
```bash
cd ..
npm install concurrently nodemon
```
### 4. Modify `package.json` to use concurrently
```JSON
"scripts": {
    "client": "cd .\frontend && npm run start"
    "server": "node .\backend\server.js"
    "fast": "concurrently \"npm run client\" \"npm run server\""
}
```
### 5. Start the server
```bash
# Ensure concurrently is properly installed and is added in package.json to handle frontend and backend concurrently before running the following command
npm run fast
```
> This will run both the frontend and backend concurrently using `concurrently`
## Author
Created by **Hrutav Modha**  
GitHub: [Hrutav Modha](https://github.com/hrutavmodha)
---
#### Suggestions and pull requests are welcome!
