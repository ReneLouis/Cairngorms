// const IMAGELIST is locatedin 'js/PictureList'.

// THIS SCRIPT FILL IN THE nav > section > ul ELEMENT (NAV GRID) WITH PICTURES
// IN const IMAGELIST.

const GRIDROOT = document.querySelector("nav section.nav-grid ul");

for (let n = 0 ; n < IMAGELIST.length ; n++) {
  let liContent = "alt src='images/280/" + IMAGELIST[n].name;
  let newImg = document.createElement("img");
    newImg.alt = "Waffle No " + n;
    newImg.src = "images/280/" + IMAGELIST[n].name
  // let newA = document.createElement("a");
  //   newA.href = "";
  let newLi = document.createElement("li");
    newLi.appendChild(newImg);
  GRIDROOT.appendChild(newLi);
}
