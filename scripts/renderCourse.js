function renderCourse(){
  courses.map((course)=>{
    console.log("Creating Card");
    createCourseCard(course)
  });
}
function createCourseCard(obj){
  let html = `
  <a href="course_details/seo-detail.html">
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

  document.querySelector("#all-courses").innerHTML += html;
}