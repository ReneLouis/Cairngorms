// const IMGLIBRARY is locatedin 'js/PictureList_TEST'.

// =============================================================================
// =============================== MAIN IMAGE CHANGE ===========================
var mainImg = document.querySelector('main > section > figure > img');
var caption = document.querySelector('main > section > figure > figcaption');
let n = 0;
let timerId = null;


// Change the name of picture to callback in changeImg.
function updateImg() {
  (n == IMGLIBRARY.length-1) ? n = 0 : n++;
    console.log(n)
    changeImg(n);
}

// This function update srcset and src for mainImg. Keept seperate to re-use when adding buttons.

  function changeImg(n) {
      mainImg.srcset = IMGLIBRARY[n].srcset();
      mainImg.src = IMGLIBRARY[n].src();
      mainImg.alt = IMGLIBRARY[n].alt;
      caption.innerHTML = IMGLIBRARY[n].description;
  }

function imageSwitch() {
  clearInterval(timerId);
  timerId = setInterval(updateImg, 6000);
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
  changeImg(n);
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
  n = Array.from(CLICKEDIMGS).indexOf(e.target);  // Assign index of clicked image to n.
  changeImg(n);           // change img displayed.
  (playing === true) ?  prevnext(0) : "";              // If diaporama is playing, stop it.s
}
// =============================================================================
