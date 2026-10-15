(function () {
  /* 移动端导航 */
  var toggle = document.getElementById('navToggle');
  var nav = document.getElementById('siteNav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () { nav.classList.toggle('open'); });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') nav.classList.remove('open');
    });
  }

  /* 标签页 */
  var tabs = document.querySelectorAll('.tab');
  if (tabs.length) {
    Array.prototype.forEach.call(tabs, function (t) {
      t.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (x) { x.classList.remove('active'); });
        t.classList.add('active');
        var panels = document.querySelectorAll('.panel');
        Array.prototype.forEach.call(panels, function (p) { p.classList.remove('active'); });
        var target = document.getElementById(t.dataset.panel);
        if (target) target.classList.add('active');
      });
    });
  }

  /* 论文年份筛选 */
  var chips = document.querySelectorAll('#yearChips .chip');
  if (chips.length) {
    Array.prototype.forEach.call(chips, function (c) {
      c.addEventListener('click', function () {
        Array.prototype.forEach.call(chips, function (x) { x.classList.remove('active'); });
        c.classList.add('active');
        var y = c.dataset.year;
        var blocks = document.querySelectorAll('.year-block');
        Array.prototype.forEach.call(blocks, function (b) {
          b.style.display = (y === 'all' || b.dataset.block === y) ? '' : 'none';
        });
      });
    });
  }

  /* 返回顶部 */
  var toTop = document.getElementById('toTop');
  if (toTop) {
    window.addEventListener('scroll', function () {
      toTop.classList.toggle('show', window.scrollY > 520);
    });
    toTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
