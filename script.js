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
  const previewIframe = document.getElementById("preview-iframe");
  const previewText = document.getElementById("preview-text");

  // Preview data object — URLs and descriptions left intact
  const previewData = {
    // PC buttons
    dta: { url: "Apps/DTA.html", text: "g†@ style app" },
    raldi: { url: "PC/RALDI.html", text: "modded version of b@ld1" },
    m: { url: "broken", text: "broken" },
    superh: { url: "PC/suph.html", text: " hit red people" },
    uk: { url: "PC/ultrak1ll.html", text: " be a robot and hit z0mb13s" },
    bacon: { url: "PC/baconmay.html", text: "be a pig and attack" },
    bbp: { url: "PC/bbppagelessons.html", text: "dowload only. Dont let the bald guy get you" },
    delta: { url: "PC/dtr.html", text: " rpg style app " },
    ppl: { url: "PC/PeoplePg.html", text: "spawn people and make scenario" },
    tt: { url: "PC/Talletail.html", text: "dont let the bear thing get you at night. horror" },
    bsr: { url: "PC2/b-cksh-t.html", text: "a rng based app." },
    funy: { url: "PC/funnysh0t.html", text: " fps style lesson" },
    clovp : { url: "Apps/cloverp.html", text: "l@s v3g@s" },
    drive: { url: "PC2/DRIVINGLESSONS.html", text: "learn how to apply for a driving license." },
    bf: { url: "PC/bul forcee.html", text: "might be broken i forgot" },
    hl: { url: "PC/hl.html", text: "very popular." },

    // Arcade buttons
    yokedsqrt: { url: "", text: "" },
    FNAE: { url: "", text: "" },
    clusteru: { url: "", text: "" },
    driftb: { url: "", text: "" },
    custsupport: { url: "", text: "" },
    tosst: { url: "", text: "" },
    fnafsisterloc: { url: "", text: "" },
    tsimi: { url: "", text: "" },
    ptk1: { url: "", text: "" },
    DLng0m: { url: "", text: "" },
    boxran: { url: "", text: "" },
    s0cc3ran: { url: "", text: "" },

    // Mobile buttons
    "drive-algebra": { url: "", text: "" },
    fnworld: { url: "", text: "" },
    Sd33boxle: { url: "", text: "" },
    brustar: { url: "", text: "" },
    madbird: { url: "", text: "" },
    BlOCKBL: { url: "", text: "" },
    smallworldc: { url: "", text: "" },
    bitl: { url: "", text: "" },
    gag: { url: "", text: "" },
    "p^z1": { url: "", text: "" },
    "p^z2": { url: "", text: "" },
    jetjoy: { url: "", text: "" },
    crazyc3d: { url: "", text: "" },
    snowrir: { url: "", text: "" },
    bbalgebra: { url: "", text: "" },
    fnfriday: { url: "", text: "" }
  };

  let hoverTimer;
  const buttons = document.querySelectorAll(".mathbutton");

  buttons.forEach(button => {
    button.addEventListener("mouseenter", (e) => {
      hoverTimer = setTimeout(() => {
        // Find the class that matches previewData
        const appClass = [...button.classList].find(c => previewData[c]);
        if (appClass) {
          previewIframe.src = previewData[appClass].url;
          previewText.textContent = previewData[appClass].text;

          // ---------- SMART POSITIONING START ----------
          const boxWidth = previewBox.offsetWidth;
          const boxHeight = previewBox.offsetHeight;
          const padding = 10;

          let left = e.pageX + padding;
          let top = e.pageY - boxHeight - padding;

          // Flip to left if going off right edge
          if (left + boxWidth > window.innerWidth) {
            left = e.pageX - boxWidth - padding;
          }

          // Flip below if going above top edge
          if (top < 0) {
            top = e.pageY + padding;
          }

          previewBox.style.left = left + "px";
          previewBox.style.top = top + "px";
          // ---------- SMART POSITIONING END ----------

          previewBox.classList.add("show");
        }
      }, 2000); // 2-second hover delay
    });

    button.addEventListener("mousemove", (e) => {
      if (previewBox.classList.contains("show")) {

        // ---------- SMART POSITIONING START ----------
        const boxWidth = previewBox.offsetWidth;
        const boxHeight = previewBox.offsetHeight;
        const padding = 10;

        let left = e.pageX + padding;
        let top = e.pageY - boxHeight - padding;

        if (left + boxWidth > window.innerWidth) {
          left = e.pageX - boxWidth - padding;
        }

        if (top < 0) {
          top = e.pageY + padding;
        }

        previewBox.style.left = left + "px";
        previewBox.style.top = top + "px";
        // ---------- SMART POSITIONING END ----------

      }
    });




button.addEventListener("mouseleave", () => {
  clearTimeout(hoverTimer);
  previewBox.classList.remove("show");

  // Stop audio/video inside iframe if same-origin
  try {
    const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;

    
const mediaElements = previewIframe.contentDocument?.querySelectorAll("audio, video") || [];
mediaElements.forEach(media => {
  media.pause();
  media.currentTime = 0;
});

  } catch (err) {
    // If iframe is cross-origin, we can't access it
    console.warn(" lil bro, I cannot stop iframe media due to cross-origin restrictions.");
  }
});

  });
});
