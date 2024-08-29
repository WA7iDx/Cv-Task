// simple guide

// 1️⃣ first of all i have cv-holder which contain cv-templete
// i'm aiming to less scale cv-templete when screen get smaller but i will face a little bit problem
// it's when i scale the cv-templete the height of cv-holder will be the same as start of loaded page
// so i'll get the height of cv-templete whener i resize the page and reset the height of cv-holder

const cvHolder = document.querySelector(".cv-holder");
const cvTemplate = document.querySelector(".cv-template");

// to handle revrese resize
let newScreenSize;

document.addEventListener("DOMContentLoaded", function () {
  console.log("hello");
  resetCvSize();
  window.addEventListener("resize", resetCvSize);
});

function resetCvSize() {
  const screenWidth = document.documentElement.getBoundingClientRect().width;

  const { height: templateHeight, width: templateWidth } =
    cvTemplate.getBoundingClientRect();
  cvHolder.style.height = `${templateHeight}px`;

  //   check if the template need to be scaled less than the current sizes
  console.log(screenWidth < templateWidth);
  if (screenWidth < templateWidth) {
    // always remeber last size when user try to small the screen
    newScreenSize = screenWidth;
    const cvTemplateWidth = cvTemplate.getBoundingClientRect().width;

    console.log(cvTemplateWidth);

    // 992 is the custom width that i give to temp at css
    const scaleRatio = cvTemplateWidth / 992;
    cvTemplate.style.scale = scaleRatio;
  }
  // if user try to resize bigger agian
  else if (screenWidth > newScreenSize) {
    const cvHolderWidth = cvHolder.getBoundingClientRect().width;
    let scaleRatio = cvHolderWidth / 992;

    // if the scale ratio skipped 1 we have to set it to 1
    if (scaleRatio > 1) {
      scaleRatio = 1;
    }
    cvTemplate.style.scale = scaleRatio;
  }
}
