function toggleNav(){

    const navbar = document.getElementById("navbar");
    const button = document.getElementById("toggleBtn");

    navbar.classList.toggle("hidden");

    if(navbar.classList.contains("hidden")){
        button.textContent = "Show";
    }else{
        button.textContent = "Hide";
    }

}





// Function used by navbar button
function cloak() {
    document.title = "New Tab";
    let icon = document.querySelector("link[rel~='icon']");
    if (icon) icon.href = "/images/psicon.png";
}

// Add event listener after navbar is loaded
function initNavbar() {
    const navButton = document.querySelector(".nav-button");
    if (navButton) {
        navButton.addEventListener("click", cloak);
    }
}

// Load navbar dynamically
fetch("/navbar.html")
    .then(r => r.text())
    .then(data => {
        document.getElementById("navbar-container").innerHTML = data;
        initNavbar(); // set up button listeners
    })
    .catch(err => console.error("Navbar failed to load:", err));










    /* previewer of apps */


const previewBox = document.getElementById("preview-box");
const previewImg = document.getElementById("preview-img");
const previewText = document.getElementById("preview-text");

let hoverTimer;

// Map each unique button class to its preview content
const previewData = {
  dta: {
    img: "images/dta.png",
    text: "Open world driving chaos game."
  },
  raldi: {
    img: "images/raldi.png",
    text: "Weird math horror game."
  },
  drift: {
    img: "images/drift.png",
    text: "Simple but addictive drifting game."
  }
};

const buttons = document.querySelectorAll(".mathbutton");

buttons.forEach(button => {

  // Hover start
  button.addEventListener("mouseenter", (e) => {
    hoverTimer = setTimeout(() => {
      const appClass = [...button.classList].find(c => previewData[c]);
      if (appClass) {
        previewImg.src = previewData[appClass].img;
        previewText.textContent = previewData[appClass].text;

        previewBox.style.left = (e.pageX + 10) + "px";
        previewBox.style.top = (e.pageY + 10) + "px";

        previewBox.classList.add("show");
      }
    }, 2000); // 2-second hover delay
  });

  // Hover move → update preview position
  button.addEventListener("mousemove", (e) => {
    if (previewBox.classList.contains("show")) {
      previewBox.style.left = (e.pageX + 10) + "px";
      previewBox.style.top = (e.pageY + 10) + "px";
    }
  });

  // Hover end
  button.addEventListener("mouseleave", () => {
    clearTimeout(hoverTimer);       // cancel hover if 2s not reached
    previewBox.classList.remove("show"); // fade out
  });

});


