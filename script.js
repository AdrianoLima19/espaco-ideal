document.querySelectorAll("a").forEach((anchor) => {
  anchor.addEventListener("click", (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
});
