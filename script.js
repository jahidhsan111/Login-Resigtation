const weaper = document.querySelector('.weaper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
registerLink.addEventListener('click', () => {
  weaper.classList.add('active');
});
loginLink.addEventListener('click', () => {
  weaper.classList.remove('active');
});