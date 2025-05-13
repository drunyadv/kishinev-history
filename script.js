document.addEventListener('DOMContentLoaded', function() {
// Примерные данные для страниц (можно заменить на загрузку из файлов)
const pages = [
  // Глава 1: Основание города
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
  // Глава 2: XIX век
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
  // Глава 3: Межвоенный период (1918–1940)
  [
    `<h2>Глава 3: Межвоенный период (1918–1940)</h2>
    <p>После распада Российской империи в 1917 году, Бессарабия, включая Кишинёв, оказалась в зоне геополитической неопределённости. В 1918 году Сфатул Цэрий (национальный совет) проголосовал за объединение с Румынией, что стало началом нового этапа в истории города.</p>
    <p><b>Административные изменения:</b> Кишинёв стал важным административным центром в составе Королевства Румыния. Город получил развитие как региональная столица, в него инвестировались средства на развитие инфраструктуры, образования и транспорта.</p>
    <p><b>Городская жизнь:</b> В 1920-е годы Кишинёв переживал стремительное культурное возрождение. Открывались новые школы, библиотеки, музыкальные и художественные заведения. Городские улицы начали асфальтироваться, был модернизирован водопровод, появился электрический транспорт.</p>
    <p><b>Архитектура:</b> В этот период строятся многочисленные здания в стиле неорумынского ренессанса, модерна и эклектики. Были возведены банки, административные здания, жилые дома с лепниной и балконами, формируя уникальный облик центра города.</p>
    <p><b>Социальная структура:</b> Население города было многонациональным: молдаване, евреи, русские, украинцы, болгары и гагаузы сосуществовали в Кишинёве, формируя пеструю и богатую культуру. Еврейская община составляла значительную часть населения и внесла вклад в торговлю, образование и искусство.</p>
    <p><b>Культурная жизнь:</b> Работали театры, кинотеатры, музыкальные салоны. Издавались газеты на нескольких языках. Проводились выставки, ярмарки и политические собрания. Кишинёв стал ареной как румынского патриотизма, так и скрытых этнополитических конфликтов.</p>
    <p><b>Политическая напряжённость:</b> Несмотря на прогресс, в регионе сохранялось напряжение. СССР не признавал аннексию Бессарабии Румынией, что в конечном итоге привело к новому повороту в судьбе города в 1940 году.</p>
    <blockquote>«Кишинёв в межвоенный период — это город надежд, перемен и скрытых бурь. Его улицы помнят шаги поэтов и марш военных сапог...»</blockquote>`,
    ""
  ],
  // Глава 4: XX век
  [
    `<h2>Глава 4: XX век</h2>
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
  // Глава 5: Современность
  [
    `<h2>Глава 5: Современность</h2>
    <img class='illustration' src='images/kishinev_1991.jpg' alt='Современный Кишинёв'>
    <p><b>1991 год</b> — после распада СССР Кишинёв становится столицей независимой Молдовы.</p>
    <p><b>Современные символы:</b> Парк «Долина роз», Арка Победы, улица Штефана чел Маре, памятники деятелям культуры.</p>
    <blockquote>«Современный Кишинёв — город парков, музеев и открытых людей.»</blockquote>`,
    `<img class='illustration' src='images/kishinev_2025.jpg' alt='Кишинёв 2025'>
    <blockquote>"Современный Кишинёв — город парков, музеев и открытых людей."</blockquote><p><b>2024</b> — столица независимой Молдовы.</p>`
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

const cover3d = document.getElementById('cover3d');
const coverImg = document.querySelector('.cover-3d-img');
const bookContainer = document.querySelector('.book-container');

const prevCorner = document.getElementById('prevCorner');
const nextCorner = document.getElementById('nextCorner');

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
  leftPage.innerHTML = (pages[idx] && pages[idx][0]) ? pages[idx][0] : "";
  rightPage.innerHTML = (pages[idx] && pages[idx][1]) ? pages[idx][1] : "";
  if (prevCorner) prevCorner.disabled = idx === 0;
  if (nextCorner) nextCorner.disabled = idx === pages.length - 1;
  if (tocList) {
    tocList.querySelectorAll('li').forEach((li, i) => {
      li.classList.toggle('active', i === idx);
    });
  }
  if (toCoverBtn) toCoverBtn.style.display = idx !== 0 ? 'block' : 'none';
}

if (prevCorner) {
  prevCorner.onclick = () => {
    if (currentChapter > 0 && !isFlipping) animateFlip('right', currentChapter - 1);
  };
}
if (nextCorner) {
  nextCorner.onclick = () => {
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
    bookContainer.style.display = 'none';
    cover3d.style.display = 'flex';
    cover3d.classList.remove('opening');
    setTimeout(() => {
      cover3d.style.opacity = 1;
    }, 100);
  };
}
if (coverImg) {
  coverImg.onclick = () => {
    cover3d.classList.add('opening');
    setTimeout(() => {
      cover3d.style.display = 'none';
      bookContainer.style.display = 'flex';
      showChapter(0);
    }, 1200);
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

// Добавляю страницу заключения
pages.push([
  `<h2>Заключение</h2>
  <p>Кишинёв — не просто столица, а живое сердце Молдовы. Город, выросший у родника, стал местом встреч поколений, культур и судеб. В его улицах звучит эхо веков, а в воздухе — дыхание перемен.</p>
  <p>На своём пути он пережил расцвет и упадок, войны и возрождение, вдохновлял поэтов и укрывал мечтателей. От скромного поселения у реки Бык до современного города с ритмом Европы — Кишинёв пронёс свою суть сквозь столетия.</p>
  <p>Сегодня он остаётся символом стойкости и обновления, где старинные церкви соседствуют с галереями современного искусства, а в шуме трамваев слышатся голоса прошлого.</p>
  <p><b>Кишинёв живёт в памяти, в людях, в камне, в тени платанов и в звоне вечерних улиц.</b></p>
  <blockquote>«У каждого города есть душа. Душа Кишинёва — тёплая, сильная и настоящая.»</blockquote>`,
  `<div style="display: flex; align-items: center; justify-content: center; height: 100%; width: 100%; text-align: center;"><b>Спасибо, что прошли этот путь вместе с нами. Открывайте Кишинёв заново — с открытым сердцем и внимательным взглядом.</b></div>`
]);
}); 