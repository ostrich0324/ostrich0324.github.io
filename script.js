// 年份
document.getElementById('year').textContent = new Date().getFullYear();

// 手機選單
const btn = document.getElementById('menuBtn');
const navList = document.getElementById('navList');
btn?.addEventListener('click', () => navList.classList.toggle('open'));

// 聯絡表單示例（用 Formspree 或你的 API 端點）
const form = document.getElementById('contactForm');
const msg = document.getElementById('formMsg');
form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  msg.textContent = '送出中…';
  try {
    // 1) 若使用 Formspree: 把下面 URL 換成你專案的表單端點
    // 2) 若使用自己的後端：把 URL 換成你的 /api/contact（見下方 PHP 端）
    const res = await fetch('https://formspree.io/f/your-id', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Object.fromEntries(new FormData(form)))
    });
    msg.textContent = res.ok ? '已送出，感謝！' : '送出失敗，稍後再試。';
    if (res.ok) form.reset();
  } catch {
    msg.textContent = '送出失敗，請檢查網路後再試。';
  }
});
