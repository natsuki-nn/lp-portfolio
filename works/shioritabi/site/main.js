(() => {
  // セクション画像のフェードイン
  const imgs = document.querySelectorAll('.sec img');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -10% 0px' });
    imgs.forEach((img) => io.observe(img));
  } else {
    imgs.forEach((img) => img.classList.add('is-in'));
  }

  // 追従CTA：FVを過ぎたら出し、最後の予約パートでは隠す
  const sticky = document.querySelector('.sticky-cta');
  const fv = document.getElementById('top');
  const reserve = document.getElementById('reserve');
  let pastFv = false, atReserve = false;
  const update = () => {
    const on = pastFv && !atReserve;
    sticky.classList.toggle('is-on', on);
    sticky.setAttribute('aria-hidden', on ? 'false' : 'true');
    sticky.tabIndex = on ? 0 : -1;
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { pastFv = !e.isIntersecting; update(); }).observe(fv);
    new IntersectionObserver(([e]) => { atReserve = e.isIntersecting; update(); }, { threshold: 0.15 }).observe(reserve);
  }

  // デモ：予約ボタンは外部へ移動しない
  const toast = document.querySelector('.toast');
  let timer;
  document.querySelectorAll('.js-demo').forEach((a) => a.addEventListener('click', (ev) => {
    ev.preventDefault();
    toast.textContent = 'デザインサンプルのため、予約ページには移動しません。';
    toast.classList.add('is-on');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-on'), 2600);
  }));
})();
