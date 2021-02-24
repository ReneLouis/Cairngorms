// const IMAGELIST is locatedin 'js/PictureList'.

var mainImg = document.querySelector('main > section > figure > img');
let n = 0;

// Change the name to callback in changeImg.
function updateImg() {
  (n == IMAGELIST.length - 1) ? n = 0 : n++;
    console.log("n = " + n + " ; " + IMAGELIST[n].name);
    changeImg(IMAGELIST[n].name);
}

// This function update srcset and src for mainImg. Keept seperate to re-use when adding buttons.
function changeImg(i) {
  mainImg.srcset = "images/400/" + i + " 400w, images/600/" + i + " 600w, images/900/" + i + " 900w, images/1200/" + i + " 1200w,images/1800/" + i + " 1800w";
  mainImg.src = "images/600/" + i;
}

let timerId = setInterval(updateImg, 3000);
