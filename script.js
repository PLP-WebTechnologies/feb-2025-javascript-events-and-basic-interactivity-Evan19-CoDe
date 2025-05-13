// Event handling
document.getElementById('eventBtn').addEventListener('click', () => {
  alert('Button clicked!');
});

// Keypress
document.addEventListener('keydown', (e) => {
  console.log(`Key pressed: ${e.key}`);
});

// Double-click and long press
const secretZone = document.getElementById('secretZone');
let timeout;

secretZone.addEventListener('dblclick', () => {
  alert('🎉 Double-click secret unlocked!');
});

secretZone.addEventListener('mousedown', () => {
  timeout = setTimeout(() => {
    alert('🕵️ Long press secret unlocked!');
  }, 1000);
});

secretZone.addEventListener('mouseup', () => {
  clearTimeout(timeout);
});

// Interactive elements
function changeMe(btn) {
  btn.innerText = "Changed!";
  btn.style.backgroundColor = "#bb86fc";
}

const images = [
  "https://via.placeholder.com/300x200/6200ea/ffffff?text=Image+1",
  "https://via.placeholder.com/300x200/03dac5/000000?text=Image+2",
  "https://via.placeholder.com/300x200/ff0266/ffffff?text=Image+3"
];
let current = 0;

function nextImage() {
  current = (current + 1) % images.length;
  document.getElementById('gallery').src = images[current];
}

function showTab(tabId) {
  document.querySelectorAll('.tab').forEach(tab => tab.style.display = 'none');
  document.getElementById(tabId).style.display = 'block';
}

// Form validation
document.getElementById('signupForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = document.getElementById('email');
  const password = document.getElementById('password');
  const feedback = document.getElementById('feedback');

  if (!email.value.includes('@')) {
    feedback.textContent = 'Please enter a valid email.';
  } else if (password.value.length < 8) {
    feedback.textContent = 'Password must be at least 8 characters.';
  } else {
    feedback.style.color = 'green';
    feedback.textContent = '✅ All good! Form submitted!';
  }
});

document.getElementById('password').addEventListener('input', function() {
  const feedback = document.getElementById('feedback');
  feedback.style.color = '#d50000';
  if (this.value.length < 8) {
    feedback.textContent = 'Password too short...';
  } else {
    feedback.textContent = 'Looking good!';
  }
});




