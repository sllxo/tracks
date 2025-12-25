window.addEventListener('load', () => {
  const loader = document.getElementById('loading-screen');
  const main = document.getElementById('main-content');

  setTimeout(() => {
    loader.style.display = 'none';
    main.classList.remove('hidden');
  }, 2000); // 2s loading for experience
});
