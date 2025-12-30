/* ===============================
   CUSTOM CURSOR
================================ */
const cursor = document.querySelector('.cursor');
const follower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';

  follower.style.left = e.clientX - 12 + 'px';
  follower.style.top = e.clientY - 12 + 'px';
});

/* ===============================
   REVEAL ON SCROLL (FIXED)
================================ */
const reveals = document.querySelectorAll('.reveal');

function activateReveal(el) {
  el.classList.add('active');
}

function checkReveal() {
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      activateReveal(el);
    }
  });
}

// обычный скролл
window.addEventListener('scroll', checkReveal);

// ПРИНУДИТЕЛЬНЫЙ ЗАПУСК ПРИ ЗАГРУЗКЕ
window.addEventListener('load', () => {
  setTimeout(checkReveal, 200);
});

/* ===============================
   FIX: BUTTON "СМОТРЕТЬ ПРОЕКТЫ"
================================ */
const projectBtn = document.querySelector('a[href="#projects"]');
const projectsSection = document.getElementById('projects');

if (projectBtn && projectsSection) {
  projectBtn.addEventListener('click', (e) => {
    e.preventDefault();

    projectsSection.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    // ПРИНУДИТЕЛЬНО ПОКАЗЫВАЕМ
    setTimeout(() => {
      activateReveal(projectsSection);

      projectsSection
        .querySelectorAll('.reveal, .project')
        .forEach(el => el.classList.add('active'));
    }, 400);
  });
}

/* ===============================
   THEME TOGGLE
================================ */
const themeBtn = document.getElementById('themeToggle');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('neon');
  });
}
