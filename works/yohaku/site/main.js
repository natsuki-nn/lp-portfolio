(() => {
  // 本文の画像は、見えたときに静かに現れる
  const imgs = document.querySelectorAll('.sec:not(.fv) img');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } });
    }, { rootMargin: '0px 0px -8% 0px' });
    imgs.forEach((img) => io.observe(img));
  } else {
    imgs.forEach((img) => img.classList.add('is-in'));
  }

  // 追従ボタン：FV を過ぎたら出し、カレンダーと最後のパートでは隠す
  const sticky = document.querySelector('.sticky-cta');
  const fv = document.getElementById('top');
  const ends = [document.getElementById('calendar'), document.getElementById('updates')];
  let pastFv = false;
  const atEnd = new Set();
  const update = () => {
    const on = pastFv && atEnd.size === 0;
    sticky.classList.toggle('is-on', on);
    sticky.setAttribute('aria-hidden', on ? 'false' : 'true');
    sticky.tabIndex = on ? 0 : -1;
  };
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { pastFv = !e.isIntersecting; update(); }).observe(fv);
    const endIo = new IntersectionObserver((entries) => {
      entries.forEach((e) => { e.isIntersecting ? atEnd.add(e.target) : atEnd.delete(e.target); });
      update();
    }, { threshold: 0.1 });
    ends.forEach((el) => endIo.observe(el));
  }

  // デモ：Instagram のボタンは外部へ移動しない
  const toast = document.querySelector('.toast');
  let timer;
  document.querySelectorAll('.js-demo').forEach((a) => a.addEventListener('click', (ev) => {
    ev.preventDefault();
    toast.textContent = 'デザインサンプルのため、Instagram には移動しません。';
    toast.classList.add('is-on');
    clearTimeout(timer);
    timer = setTimeout(() => toast.classList.remove('is-on'), 2600);
  }));
})();
