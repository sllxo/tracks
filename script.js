// Simulate loading screen
window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  const main = document.getElementById('main-content');
  
  setTimeout(() => {
    loader.style.display = 'none';
    main.classList.remove('hidden');
  }, 1500); // simulate 1.5s loading
});
