// Assuming you have an object that maps content element IDs to data properties
const contentMapping = {
  "course-title": "title",
  "course-desc": "desc",
  "course-fee": "fee",
  "course-skills": "skills",
  "course-duration": "duration",
  "course-mode": "mode",
  "course-classes-timing": "timing",
  "course-topics": "topics",
  "course-syllabus": "syllabus",
};

// Function to render course details
function renderCourseDetail() {
  // Get the course ID from the URL parameter
  const params = new URLSearchParams(window.location.search);
  const courseId = params.get("id");

  // Find the course in the data
  const course = courseData.find((course) => course.id === courseId);

  if (course) {
    // Iterate over the contentMapping object and set content for each element
    for (const elementId in contentMapping) {
      const dataProperty = contentMapping[elementId];
      setContent(elementId, course[dataProperty]);
    }
  }
}

function renderSyllabus(syllabusData) {
  // Get the container element where you want to append the syllabus
  const container = document.getElementById("syllabus");
  // Iterate through the syllabusData and create elements
  for (const heading in syllabusData) {
    // Create an h6 element for the heading
    const headingElement = document.createElement("h6");
    headingElement.textContent = heading;

    // Create an unordered list element for sub-topics
    const subTopicList = document.createElement("ul");

    // Iterate through sub-topics under the heading
    for (const subTopic in syllabusData[heading]) {
      // Create a list item element for each sub-topic
      const listItem = document.createElement("li");

      // Create an anchor element for the sub-topic
      const anchor = document.createElement("a");
      anchor.textContent = subTopic;
      anchor.href = syllabusData[heading][subTopic];
      anchor.target = "_blank"; // Open the link in a new tab

      // Append the anchor to the list item
      listItem.appendChild(anchor);

      // Append the list item to the sub-topic list
      subTopicList.appendChild(listItem);
    }

    // Append the heading and sub-topic list to the container
    container.appendChild(headingElement);
    container.appendChild(subTopicList);
  }
}

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
      if (document.getElementById(element)) {
        document.getElementById(element).textContent = content;
      }
      break;
  }
}

function start(){
  renderCourseDetail();
  renderCourseBanner();
}

// Call the render function when the page loads
window.onload = start;

// course-title
// course-desc
// course-skills
// course-duration
// course-mode
// course-classes-timing
// course-topics
// course-syllabus
// course-fee
