document.addEventListener("DOMContentLoaded", () => {
  const achievements = [
    {
      id: 1,
      title: "Student Member at Board of Management, Institute of Advanced Research",
      description:
        "Served as a student member of the Board of Management for academic years 2023-2024 and 2024-2025, representing the student body in decision-making processes.",
      year: "2025",
    },

    {
      id: 2,
      title: "Expert at Competitive Programming Workshop",
      description:
        "Conducted a workshop on competitive programming organized by the STEM Club of Institute of Advanced Research, attended by over 40 students.",
      year: "2025",
    },

    {
      id: 3,
      title: "First Prize in Annual Research & Innovation Conclave",
      description: "Won first prize for Oral Presentation on my OCR project at Annual Research & Innovation Conclave held at Institute of Advanced Research, Gandhinagar.",
      year: "2024",
    },

    {
      id: 4,
      title: "Received Academic Excellence Award",
      description:
        "Awarded for outstanding academic performance in the field of computer engineering in the academic year 2023-2024.",
      year: "2024",
    },

    {
      id: 5,
      title: "Python Programming Workshop Speaker",
      description:
        "Delivered a workshop on Python programming organized by the Computer Society & Gaming Club of Institute of Advanced Research, covering basic to advanced concepts and practical applications.",
      year: "2024",
    },

    {
      id: 6,
      title: "Hindi Diwas Debate Winner",
      description:
        "Won the first prize in the Hindi Diwas Debate competition organized by the Literary & Debate Club of Institute of Advanced Research, Gandhinagar.",
      year: "2024",
    },

    {
      id: 7,
      title: "Antakshari and Drama Competition Winner",
      description:
        "Secured first place in the Antakshari and Drama competition held at the Foundation Day of Institute of Advanced Research, Gandhinagar.",
      year: "2024",
    },

    {
      id: 8,
      title: "Vice-president of Computer Society & Gaming Club",
      description:
        "Served as the Vice-president of the Computer Society & Gaming Club at the Institute of Advanced Research, Gandhinagar, for the academic year 2023-2024.",
      year: "2024",
    },

    {
      id: 9,
      title: "Student Member at Board of Studies, Institute of Advanced Research",
      description:
        "Served as a student member of the Board of Studies for the academic year 2023-2024, contributing to curriculum development and academic policies.",
      year: "2024",
    },

    {
      id: 10,
      title: "Presenter at Annual Research & Innovation Conclave",
      description:
        "Presented my faculty mentor's project work on making street lights energy efficient at the Annual Research & Innovation Conclave held at Institute of Advanced Research, Gandhinagar.",
      year: "2023",
    },

    {
      id: 11,
      title: "Student of The Year",
      description:
        "Awarded 'Student of The Year' for the academic year 2022-2023 at the Institute of Advanced Research, Gandhinagar, recognizing my academic and extracurricular achievements.",
      year: "2023",
    },

    {
      id: 12,
      title: '5 <i class=\"fas fa-star\"></i> Python Coder on HackerRank',
      description:
        "Achieved a 5-star rating on HackerRank in Python, demonstrating proficiency in problem-solving and coding skills.",
      year: "2022",
    },
  ]

  const achievementsList = document.getElementById("achievements-list")

  if (achievementsList) {
    achievements.forEach((achievement) => {
      const achievementItem = document.createElement("div")
      achievementItem.className = "achievement-item"

      achievementItem.innerHTML = `
        <div class="achievement-icon">
          <i class="fas fa-award"></i>
        </div>
        <div class="achievement-content">
          <div class="achievement-header">
            <h3 class="achievement-title">${achievement.title}</h3>
            <span class="achievement-year">${achievement.year}</span>
          </div>
          <p class="achievement-description">${achievement.description}</p>
        </div>
      `

      achievementsList.appendChild(achievementItem)
    })
  }
})
