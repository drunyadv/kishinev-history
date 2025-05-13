document.addEventListener('DOMContentLoaded', function() {
// Примерные данные для страниц (можно заменить на загрузку из файлов)
const pages = [
  [
    `<h2>Глава 1: Основание города</h2>
    <img class='illustration' src='images/kishinev_streep_map_1800.jpg' alt='Карта Кишинёва 1800'>
    <img class='illustration' src='images/street_map_kishinev_firsthalf_xix.jpg' alt='Карта Кишинёва первая половина XIX века'>
    <p><b>1436 год</b> — первое документальное упоминание Кишинёва как сельского поселения у реки Бык.</p>
    <p><b>Происхождение названия:</b> По одной из версий, название происходит от слова «кишин» — источник, что символизирует начало жизни.</p>
    <p>В те времена поселение имело стратегическое значение, находясь на пересечении торговых путей, что способствовало его росту и развитию.</p>
    <blockquote>«Кишинёв — город, выросший у родника, стал сердцем Бессарабии.»</blockquote>
    <p><b>Достопримечательности:</b> Первые храмы, деревянные церкви, источник на реке Бык, базары и ярмарки.</p>`,

    `<img class='illustration' src='images/kishinev_street_xix.jpg' alt='Улица Кишинёва XIX век'>
    <p><b>XVII век:</b> Город активно растёт, становится торговым и ремесленным центром.</p>
    <p><b>Образование и культура:</b> Возникают церковные школы, развивается православная культура, появляются первые мастера-ремесленники.</p>
    <blockquote>«Город, где история и природа слились воедино.»</blockquote>`
  ],

  [
    `<h2>Глава 2: XIX век</h2>
    <img class='illustration' src='images/street_map_kishinev_firsthalf_xix.jpg' alt='Карта Кишинёва XIX век'>
    <img class='illustration' src='images/kishinev_street_xix.jpg' alt='Улица Кишинёва XIX век'>
    <p><b>1812 год</b> — по Бухарестскому договору Кишинёв входит в состав Российской империи как центр Бессарабской губернии.</p>
    <p><b>Архитектурные достижения:</b> Возводятся значимые здания: Триумфальная арка (1840), Кафедральный собор (1836), губернские учреждения.</p>
    <p><b>Культурная жизнь:</b> Открываются театры, типографии, библиотеки. Начинается формирование интеллигенции.</p>
    <blockquote>«В Кишинёве я нашёл вдохновение для многих своих стихов.» — А.С. Пушкин</blockquote>`,

    `<img class='illustration' src='images/kishinev_streep_map_1930.jpg' alt='Карта Кишинёва 1930'>
    <p><b>Городская среда:</b> Активно строятся мостовые, освещаются улицы, появляются парки и бульвары.</p>
    <p><b>Известные личности:</b> Александр Пушкин, живший здесь в ссылке (1820–1823), оставил яркий след в культурной истории города.</p>
    <blockquote>«Кишинёв — город, где встречаются Восток и Запад.»</blockquote>`
  ],

  [
    `<h2>Глава 3: XX век</h2>
    <img class='illustration' src='images/kishinev_ww2.jpg' alt='Кишинёв во время войны'>
    <img class='illustration' src='images/kishinev_streep_map_1930.jpg' alt='Карта Кишинёва 1930'>
    <p><b>1903 год</b> — трагический Кишинёвский погром стал одним из самых печальных событий начала века.</p>
    <p><b>1940 год</b> — вхождение в состав Советского Союза, Кишинёв становится столицей Молдавской ССР.</p>
    <p><b>1944 год</b> — освобождение города от фашистской оккупации.</p>
    <blockquote>«XX век — время испытаний, разрушений и возрождения города.»</blockquote>`,

    `<p><b>Послевоенное восстановление:</b> Возведение новых районов, широкие проспекты, панельная архитектура и модернистские проекты.</p>
    <p><b>Культурные учреждения:</b> Театр оперы и балета, Музей изобразительных искусств, Академия наук.</p>
    <blockquote>«Кишинёв — город, который всегда возрождается.»</blockquote>`
  ],

  [
    `<h2>Современность</h2>
    <img class='illustration' src='images/kishinev_modern.png' alt='Современный Кишинёв'>
    <p><b>1991 год</b> — после распада СССР Кишинёв становится столицей независимой Молдовы.</p>
    <p><b>Современные символы:</b> Парк «Долина роз», Арка Победы, улица Штефана чел Маре, памятники деятелям культуры.</p>
    <blockquote>«Современный Кишинёв — город парков, музеев и открытых людей.»</blockquote>`,

    `<p><b>Современная культура:</b> Международные фестивали, арт-резиденции, современные театры, рост туризма.</p>
    <p><b>Будущее:</b> Развитие инфраструктуры, сохранение исторического наследия, инвестиции в инновации и образование.</p>
    <img class='illustration' src='images/kishinev_modern.png' alt='Современный Кишинёв панорама'>
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