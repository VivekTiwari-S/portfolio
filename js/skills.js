document.addEventListener("DOMContentLoaded", () => {
  const skills = [
    { name: "Python", logo: "../images/python_logo.jpg" },
    { name: "Machine learning", logo: "../images/ml_logo.jpeg" },
    { name: "Deep Learning", logo: "../images/dl_logo.jpeg" },
    { name: "Flutter Framework", logo: "../images/flutter.jpeg" },
    { name: "Neural Networks", logo: "../images/nn_logo.jpeg" },
    { name: "Natural Language Processing", logo: "../images/nlp_logo.jpeg" },
    { name: "Flask Framework", logo: "../images/flask_logo.jpeg" },
    { name: "Java Programming", logo: "../images/java_logo.jpeg" },
    { name: "C Programming", logo: "../images/c_logo.jpeg" },
    { name: "C++ Programming", logo: "../images/cpp_logo.jpeg" },
    { name: "SQL", logo: "../images/sql_logo.jpeg" },
    { name: "Web-Design", logo: "../images/web_logo.jpeg" },
    { name: "Competitive Programming", logo: "../images/cp_logo.jpeg" },
    { name: "PowerBI", logo: "../images/powerbi_logo.jpeg" },
    { name: "Microsoft Office", logo: "../images/office_logo.jpeg" },
  ]

  const skillsGrid = document.getElementById("skills-grid")

  if (skillsGrid) {
    skills.forEach((skill) => {
      const skillCard = document.createElement("div")
      skillCard.className = "skill-card"

      skillCard.innerHTML = `
        <img src="${skill.logo}" alt="${skill.name}" class="skill-logo">
        <h3 class="skill-name">${skill.name}</h3>
      `

      skillsGrid.appendChild(skillCard)
    })
  }
})
