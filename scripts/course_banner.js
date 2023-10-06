// Being referenced in "courseDetail.js"

function renderCourseBanner() {
  const parameters = new URLSearchParams(window.location.search);
  const courseId = parameters.get("id");

  const matchingCourse = cardInfo.find((course) => course.id == courseId);

  if (!matchingCourse) {
    console.log("No such course found.");
  }

  const BG = document.getElementById("course-detail-header"); // get the header div
  BG.style.backgroundImage = `url("../${matchingCourse.imgUrl}")`;
  BG.style.backgroundColor = `${matchingCourse.color}`;
}
