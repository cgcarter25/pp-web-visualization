const loginButton = document.getElementById('login'),
      showCheck = document.getElementById('show-password'),
      password = document.getElementById('password');

let i = 0;

function showPassword() {
  if (password.type === "password") {
    password.type = "text";
  } else {
    password.type = "password";
  }
}

function loginIntro(e) {
  if (password.value === 'OpenSesame' && i < 3) {
    // Runs 5 times, with values of step 0 through 4.
    console.log(password.value);
    setTimeout( () => {
      window.location.href = 'data-vis.html';
    }, 500)

  } else {
    showError('Hmm... Your password is invalid, try again please!')
    i++;
  }
  e.preventDefault();
}

function showError(error) {
  const errorDiv = document.createElement('div'),
        intro = document.querySelector('.intro'),
        introPic = document.querySelector('.intro-pic');


  errorDiv.className = 'alert alert-message'

  errorDiv.appendChild(document.createTextNode(error));

  intro.insertBefore(errorDiv, introPic);

  setTimeout(clearError, 3000);
}

function clearError() {
  document.querySelector('.alert').remove();
}

showCheck.addEventListener('click', showPassword);
loginButton.addEventListener('click', loginIntro);
