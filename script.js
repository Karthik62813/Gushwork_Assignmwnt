// STICKY HEADER
let lastScroll = 0;
const sticky = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {
  let current = window.scrollY;

  if (current > 200 && current > lastScroll) {
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
document.querySelectorAll(".faq-q").forEach(q => {
  q.addEventListener("click", () => {
    let ans = q.nextElementSibling;
    ans.style.display = ans.style.display === "block" ? "none" : "block";
  });
});