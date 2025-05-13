document.addEventListener('DOMContentLoaded', function() {
// Примерные данные для страниц (можно заменить на загрузку из файлов)
const pages = [
  [
    `<h2>Обложка</h2><img class='illustration' src='images/cover.png' alt='Обложка'><p>Добро пожаловать в интерактивную книгу <b>История города Кишинёв</b>!</p>`,
    `<h3>Авторский проект</h3><p>Погрузитесь в историю города через иллюстрации и факты.</p>`
  ],
  [
    `<h2>Глава 1: Основание города</h2>
    <img class='illustration' src='images/kishinev_1800.jpg' alt='Кишинёв 1800'>
    <p><b>1436</b> — первое упоминание Кишинёва в летописях.</p>
    <p><b>Легенда:</b> Название города происходит от слова «кишин» — источник.</p>
    <blockquote>«Кишинёв — город, выросший у родника, стал сердцем Бессарабии.»</blockquote>
    <p><b>Известные места:</b> Источник на реке Бык, первые церкви и торговые ряды.</p>`,
    `<p><b>XVII век:</b> Кишинёв становится важным торговым и ремесленным центром.</p>
    <p><b>Культура:</b> Развитие православных традиций, появление первых школ.</p>
    <blockquote>«Город, где история и природа слились воедино.»</blockquote>`
  ],
  [
    `<h2>Глава 2: XIX век</h2>
    <img class='illustration' src='images/kishinev_1900.jpg' alt='Кишинёв 1900'>
    <p><b>1812</b> — Кишинёв становится центром Бессарабии в составе Российской империи.</p>
    <p><b>Архитектура:</b> Триумфальная арка (1840), Кафедральный собор (1836).</p>
    <p><b>Известные личности:</b> Александр Пушкин (жил в Кишинёве 1820–1823).</p>
    <blockquote>«В Кишинёве я нашёл вдохновение для многих своих стихов.» — А.С. Пушкин</blockquote>`,
    `<p><b>Культурная жизнь:</b> Открытие театров, библиотек, развитие образования.</p>
    <p><b>Городская среда:</b> Появление первых бульваров, фонарей, мостовых.</p>
    <blockquote>«Кишинёв — город, где встречаются Восток и Запад.»</blockquote>`
  ],
  [
    `<h2>Глава 3: XX век</h2>
    <img class='illustration' src='images/kishinev_ww2.jpg' alt='Кишинёв во время войны'>
    <p><b>1903</b> — трагические события (Кишинёвский погром).</p>
    <p><b>1940</b> — город становится столицей Молдавской ССР.</p>
    <p><b>1944</b> — освобождение города.</p>
    <blockquote>«XX век — время испытаний и возрождения города.»</blockquote>`,
    `<p><b>Культурная жизнь:</b> Театр оперы и балета, Национальный музей истории.</p>
    <p><b>Архитектура:</b> Появление новых районов, модернистские здания.</p>
    <blockquote>«Кишинёв — город, который всегда возрождается.»</blockquote>`
  ],
  [
    `<h2>Современность</h2>
    <img class='illustration' src='images/kishinev_today.jpg' alt='Современный Кишинёв'>
    <p><b>1991</b> — Кишинёв становится столицей независимой Молдовы.</p>
    <p><b>Современные символы:</b> Парк «Долина роз», улица Штефана чел Маре, скульптуры и фонтаны.</p>
    <blockquote>«Современный Кишинёв — город парков, музеев и открытых людей.»</blockquote>`,
    `<p><b>Культура:</b> Международные фестивали, новые театры, галереи.</p>
    <p><b>2024</b> — город отмечает новые достижения и открывает новые горизонты.</p>
    <blockquote>«Город, где прошлое и будущее идут рука об руку.»</blockquote>`
  ]
];

let currentChapter = 0;
let isFlipping = false;

const bookCover = document.getElementById('bookCover');
const book = document.querySelector('.book');
const leftPage = document.getElementById('leftPage');
const rightPage = document.getElementById('rightPage');
const prevBtn = document.getElementById('prevPage');
const nextBtn = document.getElementById('nextPage');
const tocList = document.getElementById('toc-list');
const navBtnsContainer = document.querySelector('.nav-btns-container');
const toCoverBtn = document.getElementById('toCoverBtn');

function animateFlip(direction, nextIdx) {
  if (isFlipping) return;
  isFlipping = true;
  if (direction === 'left') {
    // Перелистывание вперёд: анимируем ПРАВУЮ страницу
    rightPage.classList.add('flipping-left');
    setTimeout(() => {
      showChapter(nextIdx, true);
      rightPage.classList.remove('flipping-left');
      isFlipping = false;
    }, 1400);
  } else {
    // Перелистывание назад: анимируем ЛЕВУЮ страницу
    leftPage.classList.add('flipping-right');
    setTimeout(() => {
      showChapter(nextIdx, true);
      leftPage.classList.remove('flipping-right');
      isFlipping = false;
    }, 1400);
  }
}

function showChapter(idx, skipAnim) {
  currentChapter = idx;
  leftPage.innerHTML = pages[idx][0];
  rightPage.innerHTML = pages[idx][1];
  if (prevBtn) prevBtn.disabled = idx === 0;
  if (nextBtn) nextBtn.disabled = idx === pages.length - 1;
  // Выделяем текущую главу в оглавлении
  if (tocList) {
    tocList.querySelectorAll('li').forEach((li, i) => {
      li.classList.toggle('active', i === idx);
    });
  }
  // Кнопка возврата на обложку видна только не на обложке
  if (toCoverBtn) toCoverBtn.style.display = idx !== 0 ? 'block' : 'none';
}

if (prevBtn) {
  prevBtn.onclick = () => {
    if (currentChapter > 0 && !isFlipping) animateFlip('right', currentChapter - 1);
  };
}
if (nextBtn) {
  nextBtn.onclick = () => {
    if (currentChapter < pages.length - 1 && !isFlipping) animateFlip('left', currentChapter + 1);
  };
}
if (tocList) {
  tocList.querySelectorAll('li').forEach((li, idx) => {
    li.onclick = () => {
      if (idx === currentChapter || isFlipping) return;
      animateFlip(idx > currentChapter ? 'left' : 'right', idx);
    };
  });
}
if (toCoverBtn) {
  toCoverBtn.onclick = () => {
    book.style.display = 'none';
    navBtnsContainer.style.display = 'none';
    bookCover.style.display = 'block';
  };
}
const openBookBtn = document.getElementById('openBook');
if (openBookBtn) {
  openBookBtn.onclick = () => {
    bookCover.style.display = 'none';
    book.style.display = 'flex';
    navBtnsContainer.style.display = 'flex';
    showChapter(0);
  };
}
// Пример расширенного наполнения страниц
pages[1][1] += `<blockquote>"Кишинёв — город, где история встречается с современностью."</blockquote><p><b>1436</b> — первое упоминание в летописях.</p>`;
pages[2][1] += `<blockquote>"В XIX веке Кишинёв стал центром культуры и образования Бессарабии."</blockquote><p><b>1812</b> — присоединение к Российской империи.</p>`;
pages[3][1] += `<blockquote>"XX век — время испытаний и возрождения города."</blockquote><p><b>1944</b> — освобождение города от оккупации.</p>`;
pages[4][1] += `<blockquote>"Современный Кишинёв — город парков, музеев и открытых людей."</blockquote><p><b>2024</b> — столица независимой Молдовы.</p>`;
}); 