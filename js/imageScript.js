// const IMAGELIST is locatedin 'js/PictureList'.

// =============================================================================
// =============================== MAIN IMAGE CHANGE ===========================
var mainImg = document.querySelector('main > section > figure > img');
let n = 0;
let timerId = null;


// Change the name of picture to callback in changeImg.
function updateImg() {
  (n == IMAGELIST.length-1) ? n = 0 : n++;
    changeImg(IMAGELIST[n].name);
}

// This function update srcset and src for mainImg. Keept seperate to re-use when adding buttons.
function changeImg(i) {
  // console.log("n = " + n + " ; " + IMAGELIST[n].name);
  mainImg.srcset = "images/400/" + i + " 400w, images/600/" + i + " 600w, images/900/" + i + " 900w, images/1200/" + i + " 1200w,images/1800/" + i + " 1800w";
  mainImg.src = "images/600/" + i;
}

function imageSwitch() {
  clearInterval(timerId);
  timerId = setInterval(updateImg, 3000);
}

imageSwitch();

// =============================================================================
// ========================= IMAGE NAVIGATION COMMANDS =========================
const PREV = document.querySelector("nav section.menu button[name='previous']");
const NEXT = document.querySelector("nav section.menu button[name='next']");
const PLAY = document.querySelector("nav section.menu button[name='play']");
var playing = true;

// This function go to previous / next picture.
function prevnext(i) {
  clearInterval(timerId);
  timerId = null;
  if (i === 0 && playing === true) {
    playing = false;
    PLAY.innerText = "Play";
    return;
  } else if (i === 0 && playing === false) {
    playing = true;
    PLAY.innerText = "Stop";
    updateImg();
    imageSwitch();
    return;
  }
  n = n + i;
  changeImg(IMAGELIST[n].name);
  (playing == true) ? imageSwitch() : "";
}

PREV.addEventListener("click", function(){prevnext(-1)}, false);
NEXT.addEventListener("click", function(){prevnext(1)}, false);
PLAY.addEventListener("click", function(){prevnext(0)}, false);

// =============================================================================
// =================== SELECT IMAGE VIA CLICK ON GRID LIST =====================
const CLICKEDIMGS = document.querySelectorAll("nav section.nav-grid ul li img");

// THIS WORKS:
CLICKEDIMGS.forEach(function(CLICKEDIMG) {
  CLICKEDIMG.addEventListener("click", checkIndex);
})

function checkIndex(e) {
  console.log(Array.from(CLICKEDIMGS).indexOf(e.target));
  console.log(IMAGELIST[Array.from(CLICKEDIMGS).indexOf(e.target)].name);
  changeImg(IMAGELIST[Array.from(CLICKEDIMGS).indexOf(e.target)].name);       // change img displayed.
  (playing === true) ?  prevnext(0) : "";              // If diaporama is playing, stop it.s
}
// =============================================================================
