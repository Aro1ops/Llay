(function () {
  const NOMINATIONS = [
    //  (ZLAY KING)
    { nominees: [
      { name: "Леонид Маслов", image: "Images/Chad.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Сукач", image: "Images/Sukach.png" },
      { name: "Кирилл Сенаторов", image: "Images/Kirill.png" },
      { name: "Дмитрий Могаров", image: "Images/Dima.png" },
      { name: "Глебасик", image: "Images/Gleb.png" },
      { name: "Антон", image: "Images/Anton.png" },
      { name: "Никита шкет", image: "Images/NikitaS.png" },
      { name: "Ферапонтов", image: "Images/Ferp.png" }

    ] },
    
    { nominees: [
      { name: "Лика", image: "Images/DefaultW.png" },
      { name: "Даша", image: "Images/DefaultW.png" },
      { name: "Ника бьюти", image: "Images/Nika.png" },
      { name: "Маргарита", image: "Images/Margha.png" },
      { name: "Васяева", image: "Images/Vasaeva.png" },
      { name: "Зверева", image: "Images/DefaultW.png" },
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Валерия Гадем", image: "Images/Valeria.png" }
    ] },
    
    
    { nominees: [
      { name: "Моггринка и Леня Чад", image: "Images/MundL.png" },
      { name: "Даша и максим", image: "Images/DundM.png" },
      { name: "Моггаров, Сукач и перцовка", image: "Images/SDundP.png" },
      { name: "Кирилл и егермейстер", image: "Images/KundE.png" },
      { name: "Никита и Смоук", image: "Images/NandV.png" },
      { name: "Леня Чад и какая то тетка", image: "Images/LundT.png" },
    ] },
  
    { nominees: [
      { name: "Леня чад", image: "Images/Chad.png" },
      { name: "Даша", image: "Images/DefaultW.png" },
      { name: "Лика", image: "Images/DefaultW.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Глебасик", image: "Images/Gleb.png" },
      { name: "Сукач", image: "Images/Sukach.png" },
      { name: "Никита", image: "Images/Nikita.png" },
      { name: "Лёва", image: "Images/Leva.png" },
      { name: "Никита Снэк", image: "Images/NikitaS.png" },
    ] },
    
    { nominees: [
      { name: "Даша", image: "Images/DefaultW.png" },
      { name: "Ника бьюти", image: "Images/Nika.png" },
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Валерия гадем", image: "Images/Valeria.png" },
      { name: "Рома", image: "Images/Roma.png" },
      { name: "Виноградов", image: "Images/vinogradov.png" }
    ] },
    
    { nominees: [
      { name: "Леня чад", image: "Images/Chad.png" },
      { name: "Архип", image: "Images/Arkhip.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Алиса", image: "Images/DefaultW.png" },
      { name: "Мусорбек", image: "Images/Musorbek.png" },
    ] },
    { nominees: [
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Лика", image: "Images/DefaultW.png" },
      { name: "Дмитрий моггаров", image: "Images/Dima.png" },
      { name: "Глебасик", image: "Images/Gleb.png" },
      { name: "Сукач", image: "Images/Sukach.png" },
      { name: "Лёва", image: "Images/Leva.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Андрей", image: "Images/Default.png" },
      { name: "Никита", image: "Images/Nikita.png" },
    ] },
    { nominees: [
      { name: "Архип", image: "Images/Arkhip.png" },
      { name: "Рома", image: "Images/Roma.png" },
      { name: "Новик", image: "Images/Novik.png" },
      { name: "Сукач", image: "Images/Sukach.png" },
      { name: "Никита", image: "Images/Nikita.png" },
      { name: "Кирилл", image: "Images/Kirill.png" },
    ] },
    { nominees: [
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Лика", image: "Images/DefaultW.png" },
      { name: "Даша", image: "Images/DefaultW.png" },
      { name: "Алиса", image: "Images/DefaultW.png" },
      { name: "Ника бьюти", image: "Images/Nika.png" },
      { name: "Глебасик", image: "Images/Gleb.png" },
      { name: "Валерия гадем", image: "Images/Valeria.png" },
      
    ] },
    { nominees: [
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Новик", image: "Images/Novik.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Лёва", image: "Images/Leva.png" },
      { name: "Ферапонтов", image: "Images/Ferp.png" },
      { name: "Дмитрий моггаров", image: "Images/Dima.png" },
      { name: "Леня чад ", image: "Images/Chad.png" },
    ] },
    { nominees: [
      { name: "Импульс", image: "Images/Impuls.jpg" },
      { name: "Евроспар", image: "Images/EuroSpar.jpg" },
      { name: "Пакет с водой в Иваново", image: "Images/Ivanovo.jpg" },
      { name: "Смешные цены", image: "Images/FunnyPrices.jpg" },
      { name: "Баня во врево", image: "Images/VrevoBanya.jpg" },
      { name: "Последняя ночь во врево", image: "Images/NightVrevo.png" },
    ] },
    { nominees: [
      { name: "Турнир по стендофф", image: "Images/major.png" },
      { name: "Разоблочение на сукача", image: "Images/RazS.jpg" },
      { name: "Турнир по зомби заражению", image: "Images/ZZ.png" },
    ] },
    { nominees: [
      { name: "Моггринка БК", image: "Images/Moggrinka_bk.png" },
      { name: "Новик БК", image: "Images/Novik_bk.png" },
      { name: "Кирилл БК", image: "Images/Kirill_bk.png" },
      { name: "Архип БК", image: "Images/A_BK.png" },
      { name: "Сукач БК", image: "Images/Suckach_bk.png" },
      { name: "Рома БК", image: "Images/Roma_bk.png" },
      { name: "Леня чад БК", image: "Images/Chad_bk.png" },
    ] },
    { nominees: [
      { name: "Моггринка", image: "Images/Moggrinka.png" },
      { name: "Новик", image: "Images/Novik.png" },
      { name: "Михунчик", image: "Images/Mixunchick.png" },
      { name: "Лёва", image: "Images/Leva.png" },
      { name: "Сукач", image: "Images/Sukach.png" },
      { name: "Ферапонтов", image: "Images/Ferp.png" },
      { name: "Дмитрий моггаров", image: "Images/Dima.png" },
      { name: "Леня чад ", image: "Images/Chad.png" },
      { name: "Архип", image: "Images/Arkhip.png" },
    ] },
    { nominees: [
      { name: "Архип Патриот", image: "Images/A_Russ.JPG" },
      { name: "Архип ВСУ", image: "Images/A_Uk.PNG" },
      { name: "Архип Питбайкер", image: "Images/A_Pit.PNG" },
      { name: "Архип", image: "Images/A_Svin.png" },
      { name: "Архип Свин", image: "Images/A_sv.PNG" },
      { name: "Архип Пятерка", image: "Images/A_opka.PNG" },
      { name: "Архип Хойщик", image: "Images/A_hoi.PNG" },
      
    ] },

    
    { title: "Трек года", nominees: [
      { name: "Туса медуза by Arkhip", image: "Images/Tusa_A.jpg", audio: "Audio/Tusa_a.mp3" },
      { name: "Only swag by Moggarov", image: "Images/Only_swag_D.jpg", audio: "Audio/only_swag.mp3" },
      { name: "1311 by Kala", image: "Images/1311_Kala.jpg", audio: "Audio/kala.mp3" },
      { name: "её праень лох ебать by Moggrinka", image: "Images/Track_moggrinka.PNG", audio: "Audio/Moggrinka.mp3" },
      { name: "Ма я могг by Solomaslik", image: "Images/Mogg_Maslik.jpg", audio: "Audio/mogg_m.mp3" },
    ] },
  ];

  const TEXT = {
    label: "Голосование",
    close: "Закрыть",
    vote: "Проголосовать",
    selected: "Выбрано",
    voted: "Ваш голос",
    confirm: "Подтвердить",
    hintPick: "Выберите номинанта и нажмите «Подтвердить»",
    hintReady: "Проверьте выбор и нажмите «Подтвердить»",
    hintChange: "Голос будет изменён: прошлый выбор отменится",
    hintLocked: "Ваш голос засчитан. Можно выбрать другого номинанта",
    empty: "Номинанты пока не добавлены",
    cardStatus: name => "Ваш выбор: " + name
  };

  function onVote(vote) {
 
    console.log("Голос:", vote);

    return true;
  }


  const GOATCOUNTER_PREFIX = "";         
  const slug = t => String(t).replace(/\s+/g, " ").trim().replace(/ /g, "_");
  
  const MINUS_SUFFIX = ":minus";
  function track(nominationIndex, nominationTitle, nomineeName, suffix) {
    try {
      if (window.goatcounter && typeof window.goatcounter.count === "function") {
        const cfg = NOMINATIONS[nominationIndex] || {};
        const nomination = slug(cfg.trackName || nominationTitle);
        const path = (GOATCOUNTER_PREFIX ? GOATCOUNTER_PREFIX + ":" : "") +
                     nomination + ":" + slug(nomineeName) + (suffix || "");
        window.goatcounter.count({
          path: path,
          title: path.replace(/_/g, " "),
          event: true
        });
      }
    } catch (e) {}
  }

  const STORE_KEY = "slay_votes";
  function loadVotes() {
    try {
      const v = JSON.parse(localStorage.getItem(STORE_KEY));
      return v && typeof v === "object" ? v : {};
    } catch (e) { return {}; }
  }
  function saveVotes(v) {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(v)); } catch (e) {}
  }
  let votes = loadVotes();

  const hasVoted = index => { votes = loadVotes(); return votes[index] !== undefined; };


  const modal = document.createElement("div");
  modal.className = "vote-modal";
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.innerHTML =
    '<div class="vote-dialog">' +
      '<header class="vote-header">' +
        '<p class="vote-label"></p>' +
        '<h2 class="vote-title"></h2>' +
        '<button class="vote-close" type="button">✕</button>' +
      '</header>' +
      '<div class="vote-body"><div class="vote-grid"></div></div>' +
      '<footer class="vote-footer">' +
        '<p class="vote-hint"></p>' +
      '</footer>' +
    '</div>';
  document.body.appendChild(modal);

  const labelEl = modal.querySelector(".vote-label");
  const titleEl = modal.querySelector(".vote-title");
  const closeBtn = modal.querySelector(".vote-close");
  const gridEl = modal.querySelector(".vote-grid");
  const footerEl = modal.querySelector(".vote-footer");
  const hintEl = modal.querySelector(".vote-hint");
  labelEl.textContent = TEXT.label;
  closeBtn.setAttribute("aria-label", TEXT.close);

  let currentIndex = -1;   
  let pending = null;      
  let lastFocus = null;

  const getCards = () => Array.from(document.querySelectorAll(".nomination-card"));
  const cardTitle = card => {
    const t = card && card.querySelector(".nomination-card__title");
    return t ? t.textContent.trim() : "";
  };


  function makeGemButton(text) {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "button-gem";
    const outer = document.createElement("span");
    outer.className = "button-gem__text";
    const inner = document.createElement("span");
    inner.textContent = text;
    outer.appendChild(inner);
    b.appendChild(outer);
    return b;
  }
  const setGemText = (btn, text) => { btn.querySelector(".button-gem__text span").textContent = text; };

  const confirmBtn = makeGemButton(TEXT.confirm);
  confirmBtn.classList.add("vote-confirm");
  confirmBtn.dataset.voteConfirm = "1";
  footerEl.appendChild(confirmBtn);


  function refreshState() {
    votes = loadVotes();
    const voted = votes[currentIndex];           
    const hasVote = voted !== undefined;

    gridEl.querySelectorAll(".vote-nominee").forEach(item => {
      const i = Number(item.dataset.i);
      const btn = item.querySelector("[data-vote-index]");
      const isNew = pending !== null && i === pending && i !== voted;
      const isCur = hasVote && i === voted && (pending === null || pending === voted);
      item.classList.toggle("is-voted", isCur);
      item.classList.toggle("is-selected", isNew);
      item.classList.remove("is-dim");
      btn.disabled = false;
      setGemText(btn, isNew ? TEXT.selected : (hasVote && i === voted) ? TEXT.voted : TEXT.vote);
    });

    const settled = hasVote && (pending === null || pending === voted);
    confirmBtn.hidden = settled;
    confirmBtn.disabled = pending === null || pending === voted;
    hintEl.textContent = settled ? TEXT.hintLocked
                       : pending === null ? TEXT.hintPick
                       : hasVote ? TEXT.hintChange
                       : TEXT.hintReady;
    footerEl.classList.toggle("is-locked", settled);
  }

  function render(index) {
    const card = getCards()[index];
    const cfg = NOMINATIONS[index] || { nominees: [] };
    titleEl.textContent = cfg.title || cardTitle(card);
    gridEl.innerHTML = "";

    if (!cfg.nominees || !cfg.nominees.length) {
      const empty = document.createElement("div");
      empty.className = "vote-empty";
      empty.textContent = TEXT.empty;
      gridEl.appendChild(empty);
      confirmBtn.hidden = true;
      hintEl.textContent = "";
      return;
    }

    cfg.nominees.forEach((nominee, i) => {
      const item = document.createElement("div");
      item.className = "vote-nominee";
      item.dataset.i = String(i);

      const photo = document.createElement("div");
      photo.className = "vote-photo";
      const letter = () => {
        photo.innerHTML = "";
        const s = document.createElement("span");
        s.textContent = (nominee.name || "?").charAt(0);
        photo.appendChild(s);
      };
      if (nominee.audio) {
        photo.classList.add("has-audio");
        photo.dataset.audio = nominee.audio;
        photo.setAttribute("role", "button");
        photo.setAttribute("tabindex", "0");
        photo.setAttribute("aria-label", "Играть: " + nominee.name);
      }
      if (nominee.image) {
        const img = document.createElement("img");
        img.src = nominee.image; img.alt = nominee.name; img.draggable = false;
        img.onerror = letter;
        photo.appendChild(img);
      } else letter();

      const name = document.createElement("p");
      name.className = "vote-name";
      name.textContent = nominee.name;

      const btn = makeGemButton(TEXT.vote);
      btn.dataset.voteIndex = String(i);

      item.append(photo, name, btn);
      gridEl.appendChild(item);
    });
    refreshState();
  }

 
  const player = new Audio();
  player.preload = "none";
  let playingPhoto = null;

  function resetPhoto(photo) {
    if (!photo) return;
    photo.classList.remove("is-playing");
    photo.style.removeProperty("--p");
  }
  function stopAudio() {
    player.pause();
    resetPhoto(playingPhoto);
    playingPhoto = null;
  }
  function togglePlay(photo) {
    const src = photo.dataset.audio;
    if (!src) return;
    if (playingPhoto === photo) {            
      if (player.paused) { player.play().catch(() => {}); photo.classList.add("is-playing"); }
      else { player.pause(); photo.classList.remove("is-playing"); }
      return;
    }
    resetPhoto(playingPhoto);              
    playingPhoto = photo;
    player.src = src;
    player.play().catch(() => {});
    photo.classList.add("is-playing");
  }
  player.addEventListener("timeupdate", () => {
    if (playingPhoto && player.duration) {
      playingPhoto.style.setProperty("--p", (player.currentTime / player.duration * 100) + "%");
    }
  });
  player.addEventListener("ended", stopAudio);

  function openModal(index) {
    currentIndex = index;
    pending = null;
    lastFocus = document.activeElement;
    render(index);
    modal.classList.add("is-open");
    closeBtn.focus();
  }
  function closeModal() {
    stopAudio();
    modal.classList.remove("is-open");
    currentIndex = -1;
    pending = null;
    if (lastFocus && lastFocus.focus) lastFocus.focus();
  }

  function updateCardStatus(index, nomineeName) {
    const card = getCards()[index];
    const status = card && card.querySelector("[data-nomination-card-status]");
    if (status) status.textContent = TEXT.cardStatus(nomineeName);
  }


  function selectNominee(i) {
    votes = loadVotes();
    pending = (votes[currentIndex] === i) ? null : i;  
    refreshState();
  }

  function confirmVote() {
    if (pending === null) return;
    votes = loadVotes();
    const previous = votes[currentIndex];
    if (previous === pending) return;
    const cfg = NOMINATIONS[currentIndex] || { nominees: [] };
    const nominee = cfg.nominees[pending];
    if (!nominee) return;

    const result = onVote({
      nominationIndex: currentIndex,
      nominationTitle: titleEl.textContent,
      nomineeIndex: pending,
      nominee: nominee
    });
    if (result === false) return;

    votes = loadVotes();
    votes[currentIndex] = pending;       
    saveVotes(votes);
    if (previous !== undefined) {                      
      const prevNominee = cfg.nominees[previous];
      if (prevNominee) track(currentIndex, titleEl.textContent, prevNominee.name, MINUS_SUFFIX);
    }
    track(currentIndex, titleEl.textContent, nominee.name);  
    updateCardStatus(currentIndex, nominee.name);
    pending = null;
    refreshState();                      
  }


  window.addEventListener("click", e => {
    const t = e.target;
    if (!(t instanceof Element)) return;

    
    const openBtn = t.closest("[data-vote-nomination-open]");
    if (openBtn && !modal.contains(openBtn)) {
      const card = openBtn.closest(".nomination-card");
      const index = getCards().indexOf(card);
      if (index !== -1) {
        e.preventDefault();
        e.stopImmediatePropagation();
        openModal(index);
      }
      return;
    }

    
    if (modal.classList.contains("is-open")) {
      if (t === modal || t.closest(".vote-close")) { e.stopPropagation(); closeModal(); return; }
      const audioPhoto = t.closest(".vote-photo[data-audio]");
      if (audioPhoto && modal.contains(audioPhoto)) {
        e.stopPropagation();
        togglePlay(audioPhoto);
        return;
      }
      const voteBtn = t.closest("[data-vote-index]");
      if (voteBtn && modal.contains(voteBtn)) {
        e.stopPropagation();
        selectNominee(Number(voteBtn.dataset.voteIndex));
        return;
      }
      if (t.closest("[data-vote-confirm]")) { e.stopPropagation(); confirmVote(); return; }
      if (modal.contains(t)) e.stopPropagation();
    }
  }, true);

  document.addEventListener("keydown", e => {
    if (!modal.classList.contains("is-open")) return;
    if (e.key === "Escape") closeModal();
    const ph = document.activeElement;
    if ((e.key === "Enter" || e.key === " ") && ph && ph.matches && ph.matches(".vote-photo[data-audio]")) {
      e.preventDefault();
      togglePlay(ph);
    }
  });

  function restoreStatuses() {
    votes = loadVotes();
    Object.keys(votes).forEach(k => {
      const n = (NOMINATIONS[k] || {}).nominees;
      const nominee = n && n[votes[k]];
      if (nominee) updateCardStatus(Number(k), nominee.name);
    });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", restoreStatuses);
  else restoreStatuses();
})();