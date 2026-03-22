/* =========================
   STICKY HEADER
========================= */
(function stickyHeader() {
  let lastScroll = 0;
  const sticky = document.getElementById("stickyHeader");

  if (!sticky) return;

  window.addEventListener("scroll", () => {
    const current = window.scrollY;

    if (current > 1000 && current > lastScroll) {
      sticky.classList.add("active");
    } else {
      sticky.classList.remove("active");
    }

    lastScroll = current;
  });
})();


/* =========================
   IMAGE CAROUSEL + ZOOM
========================= */
(function imageCarousel() {
  const thumbs = document.querySelectorAll(".thumb");
  const mainImg = document.getElementById("currentImage");
  const zoom = document.querySelector(".zoom");

  if (!thumbs.length || !mainImg) return;

  // Thumbnail click
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      document.querySelector(".thumb.active")?.classList.remove("active");
      thumb.classList.add("active");
      mainImg.src = thumb.src;
    });
  });

  // Zoom effect (disable on mobile)
  if (zoom && window.innerWidth > 768) {
    mainImg.addEventListener("mousemove", (e) => {
      const rect = mainImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      zoom.style.backgroundImage = `url(${mainImg.src})`;
      zoom.style.backgroundPosition = `${-x * 2}px ${-y * 2}px`;
    });
  }
})();


/* =========================
   FAQ ACCORDION
========================= */
(function faqAccordion() {
  const items = document.querySelectorAll(".faq-item");
  if (!items.length) return;

  items.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      items.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
    });
  });
})();


/* =========================
   HORIZONTAL SLIDER
========================= */
(function sliderControl() {
  const slider = document.getElementById("slider");
  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");

  if (!slider || !leftBtn || !rightBtn) return;

  const scrollAmount = 300;

  rightBtn.addEventListener("click", () => {
    slider.scrollLeft += scrollAmount;
  });

  leftBtn.addEventListener("click", () => {
    slider.scrollLeft -= scrollAmount;
  });
})();


/* =========================
   PROCESS TABS + CAROUSEL
========================= */
(function processTabs() {

  const processData = [
    {
      title: "High-Grade Raw Material Selection",
      desc: "Vacuum sizing tanks ensure precise outer diameter...",
      list: ["PE100 grade material", "Optimal molecular weight distribution"],
      images: ["assets/logo.png", "assets/sample.jpg"]
    },
    {
      title: "Extrusion Process",
      desc: "Vacuum sizing tanks ensure precise outer diameter...",
      list: ["PE100 grade material", "Optimal molecular weight distribution"],
      images: ["assets/sample.jpg", "assets/logo.png"]
    },
    {
      title: "Cooling",
      desc: "Vacuum sizing tanks ensure precise outer diameter...",
      list: ["PE100 grade material", "Optimal molecular weight distribution"],
      images: ["assets/logo.png", "assets/sample.jpg"]
    }
  ];

  const tabs = document.querySelectorAll(".tab");
  const title = document.getElementById("processTitle");
  const desc = document.getElementById("processDesc");
  const list = document.getElementById("processList");
  const img = document.getElementById("processImage");
  const leftArrow = document.querySelector(".arrow.left");
  const rightArrow = document.querySelector(".arrow.right");

  if (!tabs.length || !title || !img) return;

  let currentTab = 0;
  let currentImage = 0;

  function updateContent() {
    const data = processData[currentTab];

    title.textContent = data.title;
    desc.textContent = data.desc;

    list.innerHTML = "";
    data.list.forEach(item => {
      const li = document.createElement("li");
      li.textContent = item;
      list.appendChild(li);
    });

    currentImage = 0;
    img.src = data.images[currentImage];
  }

  // Tab click
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
      document.querySelector(".tab.active")?.classList.remove("active");
      tab.classList.add("active");

      currentTab = index;
      updateContent();
    });
  });

  // Image carousel
  leftArrow?.addEventListener("click", () => {
    const images = processData[currentTab].images;
    currentImage = (currentImage - 1 + images.length) % images.length;
    img.src = images[currentImage];
  });

  rightArrow?.addEventListener("click", () => {
    const images = processData[currentTab].images;
    currentImage = (currentImage + 1) % images.length;
    img.src = images[currentImage];
  });

  updateContent();

})();


/* =========================
   MODALS
========================= */
(function modals() {
  const openBtn = document.getElementById("openModalBtn");
  const openBtn2 = document.getElementById("openModalBtn2");
  const modal = document.getElementById("modalOverlay");
  const modal2 = document.getElementById("modalOverlay2");
  const closeBtn = document.getElementById("closeModalBtn");
  const closeBtn2 = document.getElementById("closeModalBtn2");

  if (!modal || !modal2) return;

  openBtn?.addEventListener("click", () => {
    modal.style.display = "flex";
  });

  openBtn2?.addEventListener("click", () => {
    modal2.style.display = "flex";
  });

  closeBtn?.addEventListener("click", () => {
    modal.style.display = "none";
  });

  closeBtn2?.addEventListener("click", () => {
    modal2.style.display = "none";
  });

  // Close on outside click
  window.addEventListener("click", (e) => {
    if (e.target === modal) modal.style.display = "none";
    if (e.target === modal2) modal2.style.display = "none";
  });
})();