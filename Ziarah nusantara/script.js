function registerUser() {
  const email = document.querySelector('#register-form input[type="email"]').value;
  const password = document.querySelector('#register-form input[type="password"]').value;
  localStorage.setItem('user', JSON.stringify({ email, password }));
  alert("Registrasi berhasil!");
  window.location.href = 'index.html';
}

function loginUser() {
  const email = document.querySelector('#login-form input[type="email"]').value;
  const password = document.querySelector('#login-form input[type="password"]').value;
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser && storedUser.email === email && storedUser.password === password) {
    sessionStorage.setItem('loggedIn', 'true');
    window.location.href = 'index.html';
  } else {
    alert("Email atau kata sandi salah.");
  }
}

function displayLog() {
  const logContent = document.getElementById('log-content');
  const storedUser = JSON.parse(localStorage.getItem('user'));
  if (storedUser) {
    logContent.innerHTML = `<p>Email: ${storedUser.email}</p>`;
  } else {
    logContent.innerHTML = "<p>Belum ada data yang disimpan.</p>";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (sessionStorage.getItem('loggedIn') === 'true') {
    document.querySelector('header nav').innerHTML += '<a href="log.html">Log</a>';
  }
});