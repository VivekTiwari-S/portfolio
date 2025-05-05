// Set current year in footer
document.addEventListener("DOMContentLoaded", () => {
  const yearElements = document.querySelectorAll("#current-year")
  const currentYear = new Date().getFullYear()

  yearElements.forEach((element) => {
    element.textContent = currentYear
  })
})

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()

    const targetId = this.getAttribute("href")
    if (targetId === "#") return

    const targetElement = document.querySelector(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Add page transition effect
window.addEventListener("pageshow", (event) => {
  document.body.classList.add("fade-in")
})

// Add hover effect to all interactive elements
const interactiveElements = document.querySelectorAll("a, button, .project-card, .skill-card, .achievement-item")
interactiveElements.forEach((element) => {
  element.addEventListener("mouseenter", function () {
    this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease"
  })
})
