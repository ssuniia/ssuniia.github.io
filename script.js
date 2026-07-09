// Запуск музыки при первом взаимодействии
document.addEventListener('click', function initMusic() {
    const bgMusic = document.getElementById('bgMusic');
    if (bgMusic.paused) {
        bgMusic.volume = 0.3;
        bgMusic.play().catch(err => console.log('Музыка не может быть воспроизведена:', err));
    }
    document.removeEventListener('click', initMusic);
}, { once: true });

// Функция переключения страниц
function goToPage(pageNum) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    const targetPage = document.querySelector(`.page-${pageNum}`);
    if (targetPage) {
        targetPage.classList.add('active');
        
        // Генерируем сердечки на странице 3
        if (pageNum === 3) {
            generateHearts();
        }
    }
}

// Генерация сердечек по всей странице - медленная анимация
function generateHearts() {
    const container = document.querySelector('.hearts-container');
    container.innerHTML = '';
    
    for (let i = 0; i < 20; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.textContent = '❤️';
        
        const randomX = Math.random() * 400 - 200;
        const randomLeft = Math.random() * window.innerWidth;
        const randomDelay = Math.random() * 1.5;
        const randomDuration = 7 + Math.random() * 3; // 7-10 секунд для медленной анимации
        
        heart.style.setProperty('--tx', randomX + 'px');
        heart.style.left = randomLeft + 'px';
        heart.style.top = window.innerHeight + 'px';
        heart.style.animationDelay = randomDelay + 's';
        heart.style.animationDuration = randomDuration + 's';
        
        container.appendChild(heart);
    }
}

// Поведение кнопки "не хочу" - убегает
const noBtn = document.getElementById('noBtn');
if (noBtn) {
    noBtn.addEventListener('mouseover', function() {
        const randomX = Math.random() * 300 - 150;
        const randomY = Math.random() * 200 - 100;
        
        noBtn.style.position = 'relative';
        noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
        noBtn.style.transition = 'transform 0.3s ease-out';
    });

    noBtn.addEventListener('click', function(e) {
        e.preventDefault();
        return false;
    });
}

// Инициализация первой страницы
window.addEventListener('load', function() {
    const firstPage = document.querySelector('.page-1');
    if (firstPage) {
        firstPage.classList.add('active');
    }
});