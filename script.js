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







    /* previewer TM of apps */
    document.addEventListener("DOMContentLoaded", () => {
  const previewBox = document.getElementById("preview-box");
  const previewIframe = document.getElementById("preview-iframe");
  const previewText = document.getElementById("preview-text");

  // Preview data object  html and descriptions left 
  const previewData = {
    // PC buttons
    dta: { url: "Apps/DTA.html", text: "g†@ style app" },
    raldi: { url: "PC/RALDI.html", text: "modded version of b@ld1" },
    m: { url: "broken", text: "broken. ill add better one soon." },
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
    dso: { url: "PC/DEDs.html", text: "might be slow or fast idk." },
    csg: { url: "PC/counterela.html", text: " chinese cs" },
 raga: { url: "PC/clr@gd0llarchers", text: "what a doll. shoot arrows at people" }, 
 end: { url: "PC/cltimetog@mbl.html", text: "las vegas pt2" }, 
 gmb: { url: "PC/end0.html", text: "paracite" }, 
ddlc: { url: "PC/clddlc2", text: "the litature club of doki" }, 
kid1: { url: "PC/kidgarden1", text: "kidnergarten part 1" }, 
kid2: { url: "PC/kidgarden2", text: "kidnergarten part 2" }, 
kid3: { url: "PC/kidgarden3", text: "kidnergarten part 3" }, 

 
    // Arcade buttons
    yokedsqrt: { url: "ARC/yokedsqrt.html", text: "get strong and healthy" },
    FNAE: { url: "ARC/FNAE.html", text: "dont let the big e get you" },
    clus: { url: "ARC/clusteru.html", text: "jump ontop of trucks" },
    driftb: { url: "ARC/driftb.html", text: "dont fall into the void" },
    custsupport: { url: "ARC/custsupport.html", text: "be in india and be customer support" },
    tosst: { url: "ARC/tosst.html", text: "Fly as a turtle" },
    fnsl: { url: "ARC/fnafsisterloc.html", text: "i think you start in an elevator" },
    tsimi: { url: "ARC/tsimi.html", text: "Be in india and truck" },
    ptk1: { url: "ARC/ptk1.html", text: "F1" },
    DLng0m: { url: "ARC/DLng0m.html", text: "DOWLOAD ONLY. be robot and get upgrades" },
    boxran: { url: "ARC/boxran.html", text: "b0xing r@nd0ms. with b0t or pe0p1e" },
    s0cc3ran: { url: "ARC/s0cc3ran.html", text: "s0ccer r@nd0ms. with b0t or pe0p1e" },
    rtsr: { url: "ARC/rooftopmath.html", text: "roof sn1p3r r@nd0ms. with b0t or pe0p1e" },
    escr: { url: "ARC/escapeturnpike.html", text: "run away from the police" },
    sm2: { url: "ARC/sm99.html", text: " big apple" },
    inf: { url: "ARC/infc.html", text: " cr@ft inf1n1tly" },
    ali: { url: "ARC/alienh.html", text: " be mex1can when trump is president" },
    bbll: { url: "ARC/bbll.html", text: " launch the b1s0n" },
    adol: { url: "ARC/adolf.html", text: " d@nce with fire @nd ice" },
    bb: { url: "ARC/bb.html", text: " launch the borit0" },



    // Mobile buttons
    drialge: { url: "MOBILE/drive-algebra.html", text: "big truck and do stuff" },
    fnworld: { url: "MOBILE/fnworld.html", text: "rpg style" },
    Sd33boxle: { url: "MOBILE/Sd33boxle.html", text: "science work and stuff" },
    brustar: { url: "MOBILE/brustar.html", text: "that one phone @pp" },
    madbird: { url: "MOBILE/madbird.html", text: "birds that hate pigs" },
    BlOCKBL: { url: "MOBILE/BlOCKBL.html", text: "quizlit blocks" },
    smallworldc: { url: "MOBILE/smallworldc.html", text: "world cup" },
    bitl: { url: "MOBILE/bitl.html", text: "life sim" },
    gag: { url: "MOBILE/gag.html", text: "grow fruits and vestables" },
    pz1: { url: "MOBILE/p^z1.html", text: "plants that dont like the dead" },
    pz2: { url: "MOBILE/p^z2.html", text: "plants that dont like the dead 2" },
    jetjoy: { url: "MOBILE/jetjoy.html", text: "steal a jetpack and f1y" },
    crazyc3d: { url: "MOBILE/crazyc3d.html", text: "be sheep" },
    snowrir: { url: "MOBILE/snowrir.html", text: "snow riding" },
    bbalgebra: { url: "MOBILE/bbalgebra.html", text: "lebron" },
    fnfriday: { url: "MOBILE/fnfriday.html", text: "tg1 friday" },
    therb: { url: "MOBILE/retrb.html", text: "learn in the nfI" },
    clashingofclans: { url: "MOBILE/cl@shingofcl@ns.html", text: "clashing r0yale" },
    clgdlite: { url: "MOBILE/clgeodashlite.html", text: "ge0 d@sh1ng" },
    flyg: { url: "MOBILE/flyingoril.html", text: "be the gorilla" },

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
      }, 1000); // 2-second hover delay
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
  previewIframe.src = "";

  // Stop audio/video inside iframe if same-origin
  try {
    const iframeDoc = previewIframe.contentDocument || previewIframe.contentWindow.document;


const mediaElements = previewIframe.contentDocument?.querySelectorAll("audio, video") || [];
mediaElements.forEach(media => {
  media.pause();
  media.currentTime = 0;
});

  } catch (err) {
    console.warn(" lil nice, I cannot stop iframe media due to cross-origin restrictions.");
  }
});

  });
});







// popup.js

const openBtn = document.getElementById('openBtn');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('closeBtn');
const popup = document.getElementById('popup');

// Open popup
openBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
});

// Close popup
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Dragging logic
let isDragging = false;
let offsetX, offsetY;

popup.addEventListener('mousedown', (e) => {
  isDragging = true;
  offsetX = e.clientX - popup.offsetLeft;
  offsetY = e.clientY - popup.offsetTop;
});

document.addEventListener('mousemove', (e) => {
  if (isDragging) {
    popup.style.left = `${e.clientX - offsetX}px`;
    popup.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener('mouseup', () => {
  isDragging = false;
});


