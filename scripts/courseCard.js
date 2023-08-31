// function to render the card from the courseData.
function renderCourseCards() {
  courseData.map((course) => {
    createCourseCard(course);
  });
}

// function to render the card onto the canvas.
function createCourseCard(obj) {
const truncatedText = obj.desc.length > 95 ? obj.desc.substring(0, 95 - 3) + "..." : obj.desc;

  let html = `
  <a href="course_details/course-detail.html?id=${obj.id}">
    <div class="card">
    <img class="card-img-top" src="${obj.imgUrl}" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
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