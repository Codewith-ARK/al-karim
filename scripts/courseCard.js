// function to render the card from the courseData & courseInfo.
function renderCourseCards() {
  for(let i=0; i<courseData.length; i++){
    createCourseCard(courseData[i], cardInfo[i]);
  }
}

// function to render the card onto the canvas.
function createCourseCard(courseInfo, cardInfo) {
const truncatedText = courseInfo.desc.length > 95 ? courseInfo.desc.substring(0, 95 - 3) + "..." : courseInfo.desc;

  let html = `
  <a href="course_details/course-detail.html?id=${courseInfo.id}">
    <div class="card overflow-hidden">
    <div class="card-img w-100" style="background-image: url('${cardInfo.icon}'); background-color: ${cardInfo.color}"></div>
    <div class="card-body">
      <h5 class="card-title">${courseInfo.title}</h5>
      <p class="card-text">
        ${truncatedText}
      </p>
    </div>
    </div>
  </a>
  `;

  if (document.querySelector("#all-courses")) {
    document.querySelector("#all-courses").innerHTML += html;
  }
}

window.onload = renderCourseCards;