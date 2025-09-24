let editor;

// Load Monaco Editor
require.config({ paths: { vs: "https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.44.0/min/vs" } });
require(["vs/editor/editor.main"], function () {
  editor = monaco.editor.create(document.getElementById("editor"), {
    value: "# Write your code here...",
    language: "python",
    theme: "vs-dark",
    automaticLayout: true,
  });
});

// Mock login (replace with API call later)
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  if (username && password) {
    localStorage.setItem("user", username);
    document.getElementById("login-page").classList.add("hidden");
    document.getElementById("quiz-page").classList.remove("hidden");
    loadQuestion();
  } else {
    alert("Enter username and password!");
  }
}

function logout() {
  localStorage.removeItem("user");
  document.getElementById("quiz-page").classList.add("hidden");
  document.getElementById("login-page").classList.remove("hidden");
}

// Mock question loader (replace with API later)
function loadQuestion() {
  const sampleQuestions = [
    "Write a Python program to print Fibonacci series up to 10 terms.",
    "Write a Java program to check if a number is prime.",
    "Write a C program to calculate factorial using recursion."
  ];
  const randomQ = sampleQuestions[Math.floor(Math.random() * sampleQuestions.length)];
  document.getElementById("question-text").innerText = randomQ;
}

function changeQuestion() {
  loadQuestion();
}

function previewImage(event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      document.getElementById("preview").innerHTML = `<img src="${e.target.result}" alt="screenshot" class="max-h-48 rounded-lg shadow"/>`;
    };
    reader.readAsDataURL(file);
  }
}

function submitAnswer() {
  const code = editor.getValue();
  const question = document.getElementById("question-text").innerText;
  const language = document.getElementById("language").value;
  const difficulty = document.getElementById("difficulty").value;

  // Mock result (replace with Flask API later)
  document.getElementById("result-score").innerText = `Score: ${Math.floor(Math.random() * 100)}%`;
  document.getElementById("result-feedback").innerHTML = `
    <li>Syntax looks good</li>
    <li>Indentation can be improved</li>
    <li>Similarity with reference: ~80%</li>
  `;

  document.getElementById("result-popup").classList.remove("hidden");
}

function closeResult() {
  document.getElementById("result-popup").classList.add("hidden");
}
