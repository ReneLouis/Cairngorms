// const IMAGELIST is locatedin 'js/PictureList'.

// THIS SCRIPT FILL IN THE nav > section > ul ELEMENT (NAV GRID) WITH PICTURES
// IN const IMAGELIST.

const GRIDROOT = document.querySelector("nav section.nav-grid ul");

for (let n = 0 ; n < IMGLIBRARY.length ; n++) {
  let newImg = document.createElement("img");
    newImg.alt = IMGLIBRARY[n].alt;
    newImg.src = IMGLIBRARY[n].srcgrid();
  let newLi = document.createElement("li");
    newLi.appendChild(newImg);
  GRIDROOT.appendChild(newLi);
}
