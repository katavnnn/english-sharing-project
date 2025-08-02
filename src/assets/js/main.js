// file: src/assets/js/main.js (phiên bản cuối cùng)

document.addEventListener('DOMContentLoaded', () => {
  
  // --- LOGIC CHO CHẾ ĐỘ SÁNG/TỐI ---
  const themeToggleBtn = document.getElementById('theme-toggle');
  if (themeToggleBtn) {
    const sunIcon = '<i class="fa-solid fa-sun text-yellow-300"></i>';
    const moonIcon = '<i class="fa-solid fa-moon text-sky-300"></i>';

    const applyTheme = (theme) => {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        document.body.classList.remove('aurora-light');
        document.body.classList.add('aurora-dark');
        themeToggleBtn.innerHTML = sunIcon;
      } else {
        document.documentElement.classList.remove('dark');
        document.body.classList.remove('aurora-dark');
        document.body.classList.add('aurora-light');
        themeToggleBtn.innerHTML = moonIcon;
      }
    };

    const savedTheme = localStorage.getItem('theme') || 'dark';
    applyTheme(savedTheme);

    themeToggleBtn.addEventListener('click', () => {
      const newTheme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
      localStorage.setItem('theme', newTheme);
      applyTheme(newTheme);
    });
  }

  // --- KHỞI TẠO AOS ---
  AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 10,
  });

});