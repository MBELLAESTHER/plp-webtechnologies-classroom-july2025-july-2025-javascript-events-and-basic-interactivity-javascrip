// ==================
// Part 1: Event Handling
// ==================
const msgBtn = document.getElementById("msgBtn");
const msgOutput = document.getElementById("msgOutput");

msgBtn.addEventListener("click", () => {
  msgOutput.textContent = "You clicked the button! 🎉";
});

// ==================
// Part 2: Interactive Elements
// ==================

// Light/Dark Mode Toggle
const toggleTheme = document.getElementById("toggleTheme");
toggleTheme.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Counter Game
let count = 0;
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const counter = document.getElementById("counter");

increaseBtn.addEventListener("click", () => {
  count++;
  counter.textContent = count;
});

resetBtn.addEventListener("click", () => {
  count = 0;
  counter.textContent = count;
});

// ==================
// Part 3: Form Validation
// ==================
const form = document.getElementById("signupForm");
const feedback = document.getElementById("formFeedback");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // stop form from submitting

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  let errors = [];

  // Check name
  if (name === "") {
    errors.push("Name is required.");
  }

  // Check email with regex
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email.");
  }

  // Check password
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show feedback
  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully! ✅";
    feedback.style.color = "green";
    form.reset();
  }
});
