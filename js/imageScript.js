const IMAGELIST = ["DSC00210.jpg", "DSC00249.jpg", "DSC00261.jpg", "DSC00315.jpg", "DSC00318.jpg",
"DSC00336.jpg", "DSC00354.jpg", "DSC00366.jpg", "DSC00369.jpg", "DSC00375.jpg","DSC00387.jpg",
"DSC00393.jpg", "DSC00408.jpg",  "DSC00423.jpg", "DSC00435.jpg", "DSC00461.jpg", "DSC00465.jpg",
"DSC00474.jpg", "DSC00501.jpg", "DSC00504.jpg", "DSC00525.jpg", "DSC00531.jpg"]

var mainImg = document.querySelector('main > section > figure > img')

// <img  srcset="/images/DSC00210_320.jpg 320w,
//               /images/DSC00210_640.jpg  640w,
//               /images/DSC00210_1024.jpg 1024w"
//       sizes="(max-width: 640px) 340px,
//              (max-width: 1024px) 640px,
//              1024px"
//       src="/images/DSC00210_640.jpg"
//       sizes="(max-width: 640px)"
//       alt="Picture of the ruins of an acqueduct near Glenshee ski centre in the Cairngorms National Park, in Scotland."
//       width="" height="">
