// Contains list of images uploaded onto site.
//This must match with images loaded in /images subfolders.

const PICLIST = [["DSC00210.jpg", "Aqueduct ruins in the Cairngorms.", "Ruins of an aqueduct in the Cairngorms National park."],
["DSC00249.jpg", "Valley in Caringorms", "View over the valley."],
["DSC00261.jpg", "View over river in Breamar.", "View over river in Breamar."],
["DSC00315.jpg", "View over the plain.", "View over the plain."],
["DSC00318.jpg", "View over the plain.", "View over the plain."],
["DSC00336.jpg", "Riverside view, Boat of Garden.", "Riverside view in oat of Garden."],
["DSC00354.jpg", "Riverside view, Boat of Garden.", "Riverside view, Boat of Garden."],
["DSC00366.jpg", "Riverside view, Boat of Garden.", "Riverside view, Boat of Garden."],
["DSC00369.jpg", "Cairngorms mountain.", "View over the Cairngorm mountain."],
["DSC00375.jpg", "Cairngorms mountain and Loch Morlich.", "View over the Cairngorm mountain and Loch Morlich."],
["DSC00387.jpg", "Honda CBF1000A on the Cairgorms ski station.", "Honda CBF1000A on the Cairgorms ski station."],
["DSC00393.jpg", "Cairngorms mountain.", "View over the Cairngorm mountain."],
["DSC00408.jpg", "Cairngorms mountain.", "View over the Cairngorm mountain."],
["DSC00423.jpg", "Water stream on the mountainside.", "Water stream on the mountainside."],
["DSC00435.jpg", "Walkaway on the mountainside", "Walkaway on the mountainside"],
["DSC00461.jpg", "Glenmore Forest park.", "View over the Glenmore Forest park."],
["DSC00465.jpg", "Glenmore Forest park.", "View over the Glenmore Forest park."],
["DSC00474.jpg", "Loch Morlich, from the Glenmore Forest park.", "View over Loch Morlich from Glenmore Forest park."],
["DSC00501.jpg", "Walkaway in the Glenmore Forest park.", "Strolling in the Glenmore Forest park."],
["DSC00504.jpg", "Walkaway in the Glenmore Forest park.", "Strolling in the Glenmore Forest park."],
["DSC00525.jpg", "The bike in the Glenmore Forest Park.", "The bike in the Glenmore Forest Park."],
["DSC00531.jpg", "The bike in the Glenmore Forest Park.", "The bike in the Glenmore Forest Park."]]

// This is a class:
function Image(name, alt, description) {
  this.name = name;
  this.alt = alt;
  this.description = description;
  this.srcset = function() {
    return "images/400/" + this.name + " 400w, images/600/" + this.name + " 600w, images/900/" + this.name + " 900w, images/1200/" + this.name + " 1200w,images/1800/" + this.name + " 1800w";
  };
  this.src = function() {
    return "images/600/" + this.name;
  };
  this.srcgrid = function() {
    return "images/280/" + this.name;
  }
}

// Create new array IMGLIBRARY and fill with objects for each picture:
const IMGLIBRARY = [];
for (let i = 0 ; i < PICLIST.length ; i++) {
  IMGLIBRARY[i] = new Image(PICLIST[i][0], PICLIST[i][1], PICLIST[i][2]);
}
