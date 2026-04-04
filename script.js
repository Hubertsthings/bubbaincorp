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


document.addEventListener("DOMContentLoaded", () => {
  const previewBox = document.getElementById("preview-box");
  const previewImg = document.getElementById("preview-img");
  const previewText = document.getElementById("preview-text");

  let hoverTimer;

  // Map each appClass to its preview content
  const previewData = {
    dta: {
      img: "https://drive.google.com/file/d/1ouREIeNEOg6TncYJoebDvRldr5VFy05h/preview",
      text: "similar to g†@ "
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

    button.addEventListener("mouseenter", (e) => {
      hoverTimer = setTimeout(() => {
        // find the class that exists in previewData
        const appClass = [...button.classList].find(c => previewData[c]);
        if (appClass) {
          previewImg.src = previewData[appClass].img;
          previewText.textContent = previewData[appClass].text;

          previewBox.style.left = (e.pageX + 10) + "px";
          previewBox.style.top = (e.pageY + 10) + "px";

          previewBox.classList.add("show");
        }
      }, 1000); // 2-second hover delay
    });

    // Follow cursor while hovering
    button.addEventListener("mousemove", (e) => {
      if (previewBox.classList.contains("show")) {
        previewBox.style.left = (e.pageX + 10) + "px";
        previewBox.style.top = (e.pageY + 10) + "px";
      }
    });

    // Hover end → fade out and cancel timer
    button.addEventListener("mouseleave", () => {
      clearTimeout(hoverTimer);
      previewBox.classList.remove("show");
    });

  });
});
