// Simple nav toggle for mobile hamburger
document.addEventListener("DOMContentLoaded", function () {
  const btns = document.querySelectorAll(".hamburger");
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
      // find sibling .ul (could be .desktop or .mobile)
      const nav = btn.closest(".nav");
      if (!nav) return;
      const list = nav.querySelector(".ul");
      if (!list) return;
      list.classList.toggle("open");
    });
  });
});
