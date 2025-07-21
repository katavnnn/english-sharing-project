// File: main.js

document.addEventListener('DOMContentLoaded', () => {

    // --- LOGIC CHO CHẾ ĐỘ SÁNG/TỐI (THEME TOGGLE) ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const sunIcon = '<i class="fa-solid fa-sun"></i>';
    const moonIcon = '<i class="fa-solid fa-moon"></i>';

    // Hàm áp dụng theme dựa trên giá trị đã lưu
    const applyTheme = (theme) => {
        if (theme === 'light') {
            body.classList.add('light-theme');
            themeToggleBtn.innerHTML = moonIcon;
        } else {
            body.classList.remove('light-theme');
            themeToggleBtn.innerHTML = sunIcon;
        }
    };

    // Kiểm tra theme đã lưu trong localStorage khi tải trang
    const savedTheme = localStorage.getItem('theme') || 'dark'; // Mặc định là theme tối
    applyTheme(savedTheme);

    // Xử lý sự kiện khi bấm nút
    themeToggleBtn.addEventListener('click', () => {
        let currentTheme = body.classList.contains('light-theme') ? 'light' : 'dark';
        let newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        // Áp dụng theme mới
        applyTheme(newTheme);
        
        // Lưu lựa chọn vào localStorage
        localStorage.setItem('theme', newTheme);
    });


    // --- KHỞI TẠO THƯ VIỆN AOS (ANIMATE ON SCROLL) ---
    AOS.init({
        duration: 800,      // Thời gian hiệu ứng
        easing: 'ease-in-out', // Kiểu hiệu ứng
        once: true,         // Chỉ chạy hiệu ứng 1 lần
        offset: 50,         // Chạy hiệu ứng khi cuộn qua 50px
    });

});