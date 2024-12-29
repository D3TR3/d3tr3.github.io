document.addEventListener("DOMContentLoaded", () => {
  // Update colors for the name on the form page
  setInterval(updateColors, 1000);

  // Query Selectors
  const hamburgerInput = document.querySelector(".hamburger input");
  const nav = document.querySelector("nav");

  const arrowContainer = document.querySelector(".arrow-container");
  const nameInput = document.querySelector("#nameInput");
  const formContainer = document.querySelector(".form");
  const greetingDiv = document.querySelector("#greetingDiv");
  const codeContainer = document.querySelector(".codeContainer");
  const code = document.querySelector(".code");
  const home = document.querySelector(".home");

  const projectImage = document.getElementById("projectImage");
  const overlay = document.getElementById("overlay");
  const enlargedImageContainer = document.getElementById("enlargedImageContainer"
  );

  fadeOut([greetingDiv])

  // Fade in and out functions
  function fadeIn(elements) {
    elements.forEach(element => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }

  function fadeOut(elements) {
    elements.forEach(element => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  }

  projectImage.addEventListener("click", function () {
    overlay.classList.add("fade-in");
    enlargedImageContainer.classList.add("fade-in");
  });

  function handleClickingImageOrOverlay() {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");

    enlargedImageContainer.classList.remove("fade-in");
    enlargedImageContainer.classList.add("fade-out");

    overlay.classList.remove("fade-out");
    enlargedImageContainer.classList.remove("fade-out");

  }

  overlay.addEventListener("click", handleClickingImageOrOverlay);
  enlargedImageContainer.addEventListener("click", handleClickingImageOrOverlay);

  // Forms enter key listener
  nameInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && nameInput.value.trim() !== "") {
      const userName = nameInput.value.trim();

      hiText.textContent = userName;
      formContainer.classList.remove("fade-in");
      formContainer.classList.add("fade-out");

      greetingDiv.classList.remove("fade-out");
      greetingDiv.classList.add("fade-in");

      hiParagraph.classList.remove("fade-out");
      hiParagraph.classList.add("fade-in");
    }
  });

  // Listener if clicked outside hamburger menu
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



  // Code navbar click button
  code.addEventListener("click", () => {
    fadeOut([greetingDiv, hiParagraph, formContainer]);
    fadeIn([codeContainer, projectImage]);
  });

  // Home navbar click button
  home.addEventListener("click", () => {
    fadeIn([formContainer, hiParagraph]);
    fadeOut([greetingDiv, codeContainer, projectImage]);
  });

   // If hamburger menu is checked 
   hamburgerInput.addEventListener("change", () => {
    if (hamburgerInput.checked) {
      arrowContainer.classList.add("fade-out");
      nav.classList.add("active");
    } else {
      nav.classList.remove("active");
      arrowContainer.classList.remove("fade-out");
    }
  });

  //NAME COLOR GENERATOR + ANIMATION + FONT WEIGHT
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
});
