// STICKY HEADER
let lastScroll = 0;
const sticky = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > 500 && current > lastScroll) {
    sticky.classList.add("active");
  } else {
    sticky.classList.remove("active");
  }

  lastScroll = current;
});


// IMAGE CAROUSEL
const thumbs = document.querySelectorAll(".thumb");
const mainImg = document.getElementById("currentImage");
const zoom = document.querySelector(".zoom");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    document.querySelector(".active").classList.remove("active");
    thumb.classList.add("active");
    mainImg.src = thumb.src;
  });
});

// ZOOM EFFECT
mainImg.addEventListener("mousemove", (e) => {
  const rect = mainImg.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  zoom.style.backgroundImage = `url(${mainImg.src})`;
  zoom.style.backgroundPosition = `${-x * 2}px ${-y * 2}px`;
});


// FAQ TOGGLE
// document.querySelectorAll(".faq-q").forEach(q => {
//   q.addEventListener("click", () => {
//     let ans = q.nextElementSibling;
//     ans.style.display = ans.style.display === "block" ? "none" : "block";
//   });
// });

const items = document.querySelectorAll(".faq-item");

items.forEach(item => {
  item.querySelector(".faq-question").addEventListener("click", () => {

    // close all
    items.forEach(i => i.classList.remove("active"));

    // open clicked
    item.classList.add("active");

  });
});

const slider = document.getElementById("slider");
const leftBtn = document.getElementById("leftBtn");
const rightBtn = document.getElementById("rightBtn");

const scrollAmount = 300;

rightBtn.addEventListener("click", () => {
  slider.scrollLeft += scrollAmount;
});

leftBtn.addEventListener("click", () => {
  slider.scrollLeft -= scrollAmount;
});





// DATA (for tabs)
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

// ELEMENTS
const tabs = document.querySelectorAll(".tab");
const title = document.getElementById("processTitle");
const desc = document.getElementById("processDesc");
const list = document.getElementById("processList");
const img = document.getElementById("processImage");

const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");

let currentTab = 0;
let currentImage = 0;

// UPDATE UI
function updateContent() {
  const data = processData[currentTab];

  title.textContent = data.title;
  desc.textContent = data.desc;

  list.innerHTML = "";
  data.list.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });

  currentImage = 0;
  img.src = data.images[currentImage];
}

// TAB CLICK
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    document.querySelector(".tab.active").classList.remove("active");
    tab.classList.add("active");

    currentTab = index;
    updateContent();
  });
});

// CAROUSEL BUTTONS
leftArrow.addEventListener("click", () => {
  const images = processData[currentTab].images;
  currentImage = (currentImage - 1 + images.length) % images.length;
  img.src = images[currentImage];
});

rightArrow.addEventListener("click", () => {
  const images = processData[currentTab].images;
  currentImage = (currentImage + 1) % images.length;
  img.src = images[currentImage];
});

// INIT
updateContent();




  const openBtn = document.getElementById("openModalBtn");
  const openBtn2 = document.getElementById("openModalBtn2");
  const modal = document.getElementById("modalOverlay");
  const modal2 = document.getElementById("modalOverlay2");
  const closeBtn = document.getElementById("closeModalBtn");
  const closeBtn2 = document.getElementById("closeModalBtn2");

  openBtn.addEventListener("click", () => {
    modal.style.display = "flex";
  });
  openBtn2.addEventListener("click", () => {
    modal2.style.display = "flex";
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });
  closeBtn2.addEventListener("click", () => {
    modal2.style.display = "none";
  });

  //  Close when clicking outside modal 
  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
