(function () {
  const tiles = [
    { image: "Resources/row-1-column-1.jpg", elements: ["Мид 11","Мид 2"] },
    { image: "Resources/row-1-column-2.jpg", elements: ["Мид 2","Мид 9","Мид 6"] },
    { image: "Resources/row-1-column-3.jpg", elements: ["Мид 18","Мид 15","Мид 14"] },
    { image: "Resources/row-1-column-4.jpg", elements: ["Мид 19"] },

    { image: "Resources/row-2-column-1.jpg", elements: ["Мид 11","Мид 13","Мид 2"] },
    { image: "Resources/row-2-column-2.jpg", elements: ["Мид 3","Мид 2","Мид 7","Мид 12","Мид 17"] },
    { image: "Resources/row-2-column-3.jpg", elements: ["Мид 17","Мид 16","Мид Зиги"] },
    { image: "Resources/row-2-column-4.jpg", elements: ["Мид 19"] },

    { image: "Resources/row-3-column-1.jpg", elements: ["Мид 5","Мид 1"] },
    { image: "Resources/row-3-column-2.jpg", elements: ["Мид 1","Мид 20"] },
    { image: "Resources/row-3-column-3.jpg", elements: ["Мид Зиги","Мид 4"] },
    { image: "Resources/row-3-column-4.jpg", elements: ["Мид 10"] },

    { image: "Resources/row-4-column-1.jpg", elements: ["Мид ?"] },
    { image: "Resources/row-4-column-2.jpg", elements: ["Мид 8","Мид 8"] },
    { image: "Resources/row-4-column-3.jpg", elements: ["Мид 8","Мид 4"] },
    { image: "Resources/row-4-column-4.jpg", elements: ["Мид ?"] }
  ];

  const tasks = ["Мид 1","Мид 2","Мид 3","Мид 4","Мид 5","Мид 6","Мид 7","Мид 8","Мид 9","Мид 10",
    "Мид 11","Мид 12","Мид 13","Мид 14","Мид 15","Мид 16","Мид 18","Мид 19","Мид 20","Мид Зиги","Мид 17"];

  const translations = {
    "Мид 1":"Мид", "Мид 2":"Фантан", "Мид 3":"Радио", "Мид 4":"Спавн КТ",
    "Мид 5":"Спавр Т", "Мид 6":"Аппарты", "Мид 7":"Окно", "Мид 8":"Шорт",
    "Мид 9":"Лестница в аппарты", "Мид 10":"Угол Спавн кт", "Мид 11":"Колонны",
    "Мид 12":"Под окном", "Мид 13":"Нора Вели", "Мид 14":"Плент А",
    "Мид 15":"Под балконои аппарт", "Мид 16":"Боксы писек", "Мид 18":"Балкон аппарт",
    "Мид 19":"спуск", "Мид 20":"Спуск мид", "Мид Зиги":"Кишки", "Мид 17":"Писки"
  };

  const uiText = {
    ru: {
      instruction: "Выберите все квадраты, в которых изображены",
      subtitle: "Нажмите «Подтвердить», когда закончите.",
      confirm: "Подтвердить",
      success: "Верно! Проверка пройдена 😎",
      retry: "Не совсем. Попробуй ещё раз!"
    },
    en: {
      instruction: "Выберите все квадраты, в которых изображены",
      subtitle: "Нажмите «Подтвердить», когда закончите.",
      confirm: "Подтвердить",
      success: "Верно! Проверка пройдена 😎",
      retry: "Не совсем. Попробуй ещё раз!"
    }
  };

  let language = "ru";
  let currentTask = "";
  const selected = new Set();

  const overlay = document.getElementById("captchaOverlay");
  const grid = document.getElementById("captchaGrid");
  const targetText = document.getElementById("captchaTarget");
  const statusText = document.getElementById("captchaStatus");

  const translated = v => (language === "en" ? (translations[v] || v) : v);

  function updateLanguageUI() {
    const t = uiText[language];
    document.getElementById("captchaInstruction").textContent = t.instruction;
    document.querySelector(".captcha-subtitle").textContent = t.subtitle;
    document.getElementById("confirmCaptcha").textContent = t.confirm;
    targetText.textContent = translated(currentTask);
    document.getElementById("languageToggle").textContent =
      language === "ru" ? "Mid / Standoff" : "Standoff / Mid";
  }

  // Пока капча открыта, остальной сайт недоступен ни мышью, ни клавиатурой
  function lockSite(lock) {
    if (lock) document.body.setAttribute("inert", "");
    else document.body.removeAttribute("inert");
  }

  function openCaptcha() {
    overlay.classList.add("is-open");
    lockSite(true);
    createChallenge();
  }

  function closeCaptcha() {
    overlay.classList.remove("is-open");
    lockSite(false);
  }

  function createChallenge() {
    selected.clear();
    statusText.textContent = "";
    currentTask = tasks[Math.floor(Math.random() * tasks.length)];
    targetText.textContent = translated(currentTask);

    grid.innerHTML = "";
    tiles.forEach((tile, index) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "captcha-tile";
      button.setAttribute("aria-label", `Квадрат ${index + 1}`);

      const img = document.createElement("img");
      img.src = tile.image;
      img.alt = "";
      img.draggable = false;
      button.appendChild(img);

      grid.appendChild(button);
    });
  }

  function checkCaptcha() {
    const correct = new Set(
      tiles.map((tile, i) => (tile.elements.includes(currentTask) ? i : -1))
           .filter(i => i !== -1)
    );
    const ok = correct.size === selected.size && [...correct].every(i => selected.has(i));

    if (ok) {
      statusText.textContent = uiText[language].success;
      statusText.style.color = "#16803c";
      setTimeout(closeCaptcha, 900);   // единственный способ закрыть капчу
    } else {
      statusText.textContent = uiText[language].retry;
      statusText.style.color = "#c62828";
      setTimeout(createChallenge, 900);
    }
  }

  // Клики обрабатываем на window в capture-фазе: так скрипты сайта
  // не могут их перехватить или заблокировать.
  window.addEventListener("click", e => {
    if (!overlay.contains(e.target)) return;
    e.stopPropagation();

    const tile = e.target.closest(".captcha-tile");
    if (tile) {
      const index = Array.prototype.indexOf.call(grid.children, tile);
      if (selected.has(index)) { selected.delete(index); tile.classList.remove("selected"); }
      else { selected.add(index); tile.classList.add("selected"); }
      return;
    }
    if (e.target.closest("#confirmCaptcha")) { checkCaptcha(); return; }
    if (e.target.closest("#languageToggle")) {
      language = language === "ru" ? "en" : "ru";
      updateLanguageUI();
    }
  }, true);

  // Остальные события мыши/касаний внутри капчи сайту тоже не отдаём
  ["pointerdown", "pointerup", "mousedown", "mouseup", "touchstart", "touchend"].forEach(type =>
    window.addEventListener(type, e => {
      if (overlay.contains(e.target)) e.stopPropagation();
    }, true)
  );

  document.documentElement.appendChild(overlay); // вне <body>: сайт на него не влияет
  openCaptcha(); // сразу при входе на сайт

})();


