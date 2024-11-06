const closeProfileButton = document.querySelector('.close-profile');

closeProfileButton.addEventListener('click', () => {
  const userProfile = document.querySelector('.user-profile');
  userProfile.style.display = 'none';
});