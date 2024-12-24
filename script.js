document.addEventListener("DOMContentLoaded", () => {
  const arrowHTML = `
    <div class="arrow-container">
      <svg class="arrow-svg" width="60" height="30" viewBox="0 0 60 30">
        <path d="M55 15 L10 15 M20 5 L10 15 L20 25" class="arrow-path" />
      </svg>
      <span class="arrow-text">here are my socials</span>
    </div>
  `;

  document.body.insertAdjacentHTML("beforeend", arrowHTML);

  const hamburgerInput = document.querySelector(".hamburger input");
  const nav = document.querySelector("nav");
  const arrowContainer = document.querySelector(".arrow-container");

  hamburgerInput.addEventListener("change", () => {
    if (hamburgerInput.checked) {
      arrowContainer.classList.add("fade-out");
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
      setTimeout(() => {
        arrowContainer.classList.remove("fade-out");
      }, 300);
    }
  });

  document.addEventListener("click", (e) => {
    if (
      !nav.contains(e.target) &&
      !document.querySelector(".hamburger").contains(e.target) &&
      nav.classList.contains("active")
    ) {
      hamburgerInput.checked = false;
      nav.classList.remove("active");
      arrowContainer.style.display = "flex";
      arrowContainer.classList.remove("fade-out");
    }
  });

  const nameInput = document.querySelector("#nameInput");
  const formContainer = document.querySelector(".form");
  const hiParagraph = document.querySelector("#hiParagraph");
  const hiText = document.querySelector("#hiText");
  const greetingDiv = document.querySelector("#greetingDiv");

  function updateColors() {
    const style = document.createElement("style");
    const hue1 = Math.floor(Math.random() * 360);
    const hue2 = Math.floor(Math.random() * 360);
    const hue3 = Math.floor(Math.random() * 360);
    const hue4 = Math.floor(Math.random() * 360);
    const hue5 = Math.floor(Math.random() * 360);
    const hue6 = Math.floor(Math.random() * 360);
    const hue7 = Math.floor(Math.random() * 360);
    const hue8 = Math.floor(Math.random() * 360);
    const hue9 = Math.floor(Math.random() * 360);
    const hue10 = Math.floor(Math.random() * 360);
    const hue11 = Math.floor(Math.random() * 360);

    style.textContent = `
    @keyframes colorFontChange {
      0%, 100% { color: hsl(${hue1}, 100%, 50%); }
      10% { 
        color: hsl(${hue2}, 100%, 50%);
        font-family: 'DM Sans', sans-serif;
        font-style: italic;
        transform: translateY(0) scale(1);
      }
      20% {
        color: hsl(${hue3}, 100%, 50%);
        font-family: 'Inter', sans-serif;
        font-weight: 600;
        transform: translateY(-5px) scale(1.1);
      }
      30% {
        color: hsl(${hue4}, 100%, 50%); 
        font-family: 'Manrope', sans-serif;
        font-weight: 500;
        transform: translateY(0) scale(1);
      }
        40% {
        color: hsl(${hue5}, 100%, 50%); 
        font-family: 'Playfair Display', serif;
        font-weight: 700;
        font-style: italic;
        transform: translateY(0) scale(1);
      }
        50% {
        color: hsl(${hue6}, 100%, 50%); 
        font-family: 'PT Sans', sans-serif;
        transform: translateY(0) scale(1);
      }
        60% {
        color: hsl(${hue7}, 100%, 50%); 
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 300;
        transform: translateY(0) scale(1);
      }
        70% {
        color: hsl(${hue8}, 100%, 50%); 
        font-family: 'Rubik', sans-serif;
        font-weight: 500;
        transform: translateY(0) scale(1);
      }
        80% {
        color: hsl(${hue9}, 100%, 50%); 
        font-family: 'Fira Sans', sans-serif;
        transform: translateY(0) scale(1);
      }
        90% {
        color: hsl(${hue10}, 100%, 50%); 
        font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 100;
        transform: translateY(0) scale(1);
      }
        100% {
        color: hsl(${hue11}, 100%, 50%); 
        font-family: 'Merriweather', serif;
        font-weight: 700;
        transform: translateY(0) scale(1);
      }
    }
  `;
    document.head.appendChild(style);
  }

  nameInput.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && nameInput.value.trim() !== "") {
      const userName = nameInput.value.trim();
      hiText.textContent = userName;
      formContainer.classList.add("fade-out");
      greetingDiv.classList.add("fade-in");
      hiParagraph.classList.add("fade-in");
    }
  });

  setInterval(updateColors, 1000);
});
