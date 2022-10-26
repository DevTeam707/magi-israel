const allSections = document.querySelectorAll(".section");

const revealSection = function (entries, observor) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  entry.target.classList.remove("section--hidden");
  sectionObservor.unobserve(entry.target);
};

const sectionObservor = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

allSections.forEach(function (section) {
  sectionObservor.observe(section);
  section.classList.add("section--hidden");
});

const btnTranslate = document.getElementById("translate");
const sectionEN = document.getElementsByClassName("english")[0];
const sectionHB = document.getElementsByClassName("hebrew")[0];
console.log(btnTranslate, sectionEN, sectionHB);

btnTranslate.addEventListener("click", () => {
  if (btnTranslate.textContent == "Translate to עִברִית") {
    btnTranslate.textContent = "Translate to English";
  } else {
    btnTranslate.textContent = "Translate to עִברִית";
  }

  sectionEN.classList.toggle("hidden");
  sectionHB.classList.toggle("hidden");
});
