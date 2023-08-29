function renderCourseCards() {
  courseData.map((course) => {
    createCourseCard(course);
  });
}
function createCourseCard(obj) {
  let html = `
  <a href="course_details/course-detail.html?id=${obj.id}">
    <div class="card">
    <img class="card-img-top" src="${obj.imgUrl}" alt="Card image cap" />
    <div class="card-body">
      <h5 class="card-title">${obj.title}</h5>
      <p class="card-text">
        ${obj.desc}
      </p>
    </div>
    </div>
  </a>
  `;

  if (document.querySelector("#all-courses")) {
    document.querySelector("#all-courses").innerHTML += html;
  }
}

// Function to render course details
function renderCourseDetail() {
  // Get the course ID from the URL parameter
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("id");

  // Find the course in the data
  const course = courseData.find((course) => course.id === courseId);

  if (course) {
    // Populate the page elements with course data
    setContent("course-title", course.title);
    setContent("course-desc", course.desc);
    setContent("course-fee", course.fee);
    setContent("course-skills", course.skills);
    setContent("course-duration", course.duration);
    setContent("course-mode", course.mode);
    setContent("course-classes-timing", course.timing);
    setContent("course-topics", course.topics);
    setContent("course-syllabus", course.syllabus);
    // Populate other elements as needed
  } else {
    // Handle the case when the course is not found
    // For example, display an error message or redirect to a 404 page
  }
}

// Call the render function when the page loads
window.onload = renderCourseDetail;

function setContent(element, content) {
  switch (element) {
    case "course-skills":
    case "course-classes-timing":
      if (Array.isArray(content)) {
        let tempContent = content.join(", ");
        document.getElementById(element).textContent = tempContent;
      }
      break;

    case "course-topics":
      if (Array.isArray(content)) {
        let div = document.getElementById(element);
        content.forEach((item) => {
          let li = `<li>${item}</li>`;
          div.innerHTML += li;
        });
      }
      break;

    case "course-syllabus":
      renderSyllabus(content);
    default:
      // if (typeof content === "string") {
      if (document.getElementById(element)) {
        document.getElementById(element).textContent = content;
      }
      // }
      break;
  }
}
// course-title
// course-desc
// course-skills
// course-duration
// course-mode
// course-classes-timing
// course-topics
// course-syllabus
// course-fee
