document.addEventListener("DOMContentLoaded", () => {
  const projects = [
    {
      id: 1,
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing projects and skills.",
      image: "../images/pro1_fp.jpeg",
    },

    {
      id: 2,
      title: "Aquaminder : Water Leak Detection Application",
      description: "A web application for monitoring and detecting water leaks in real-time.",
      image: "../images/pro2_fp.jpeg",
    },

    {
      id: 3,
      title: "LikhAI : Handwritten text recognition and processing application",
      description: "An application for recognizing and processing handwritten text using machine learning.",
      image: "../images/pro3_fp.jpeg",
    },

    {
      id: 4,
      title: "Product Health Rater : Web based rating tool for consumables",
      description: "A web application for rating and reviewing products based on its content.",
      image: "../images/pro4_fp.jpeg",
    },

    {
      id: 5,
      title: "Farmify : ML-based crop disease prediction system",
      description: "A machine learning-based system for predicting crop diseases and providing solutions.",
      image: "../images/pro5_fp.jpeg",
    },

    {
      id: 6,
      title: "Harvestify : ML-based crop recommendation system",
      description: "A machine learning-based system for recommending suitable crops based on soil and weather conditions.",
      image: "../images/pro6_fp.jpeg",
    },

    {
      id: 7,
      title: "URL Shortener",
      description: "A web application for shortening and managing URLs.",
      image: "../images/pro7_fp.jpeg",
    },

  ]

  const projectsGrid = document.getElementById("projects-grid")

  if (projectsGrid) {
    projects.forEach((project) => {
      const projectCard = document.createElement("div")
      projectCard.className = "project-card"

      projectCard.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="project-image">
        <div class="project-info">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-description">${project.description}</p>
        </div>
      `

      projectsGrid.appendChild(projectCard)
    })
  }
})
