document.body.addEventListener("mouseover", () => {
  document.body.style.scrollbarWidth = "12px"; // Change the width of the scrollbar when hovering over the handle
});

document.body.addEventListener("mouseout", () => {
  document.body.style.scrollbarWidth = "8px"; // Restore the width of the scrollbar when mouse leaves the body
});

