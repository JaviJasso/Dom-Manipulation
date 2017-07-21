let portfolioData = [
  {
    img: "img/boat.jpg",
    h2: "Boats"
  },
  {
    img: "img/hair.jpg",
    h2: "Hair Styles"
  },
  {
    img: "img/shirts.jpg",
    h2: "t Shirts"
  },
  {
    img: "img/dirt.jpg",
    h2: "Dirt"
  }
]

/***************************************************/
/* 1. Add hero Content *****************************/
/***************************************************/
let heroSection = document.getElementById("hero")

let heroContent = document.createElement("h1")
let heroParagraph = document.createElement("p")

heroContent.innerHTML = "Acme Desing Studio"
heroParagraph.innerHTML =
  "We are dedicated to reproducing the best design in the world."

heroSection.appendChild(heroContent)
heroSection.appendChild(heroParagraph)
/***************************************************/
/* 2. Add Portfolio Content ************************/
/***************************************************/
let portfolioSection = document.getElementById("portfolio")

for (var i = 0; i < portfolioData.length; i++) {
  let portfolioImage = document.createElement("img")
  let portfolioText = document.createElement("h2")
  portfolioImage.src = portfolioData[i].img
  portfolioText.textContent = portfolioData[i].h2
  portfolioSection.appendChild(portfolioImage)
  portfolioSection.appendChild(portfolioText)
}

/***************************************************/
/* 3. Navigation Dropdown **************************/
/***************************************************/
let mainNavigation = document.getElementById("main_navigation")
let dropdown = document.getElementById("dropdown")

function theNAvs() {
  mainNavigation.classList.toggle("visible")
}

dropdown.addEventListener("click", theNAvs)
