function renderSyllabus(syllabus) {
  const accordion = document.getElementById("syllabus");
  const accordionItems = [];
  let count = 0;

  for (const heading in syllabus) {
    const accordionItem = document.createElement("div");
    accordionItem.classList.add("accordion-item");

    const accordionHeader = document.createElement("h2");
    accordionHeader.classList.add("accordion-header");
    accordionHeader.setAttribute("id", `heading${count}`);

    const accordionButton = document.createElement("button");
    accordionButton.classList.add("accordion-button");
    accordionButton.setAttribute("type", "button");
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute("data-bs-target", `#collapse${count}`);
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute("aria-controls", `collapse${count}`);
    accordionButton.textContent = heading;

    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionHeader);

    const accordionBody = document.createElement("div");
    accordionBody.classList.add("accordion-collapse","collapse" , "py-2","px-3");
    accordionBody.setAttribute("id", `collapse${count}`);
    accordionBody.setAttribute("aria-labelledby", `heading${count}`);
    accordionBody.setAttribute("data-bs-parent", "#syllabus");
    accordionItem.appendChild(accordionBody);

    const ul = document.createElement("ul");
    ul.classList.add("p-3")
    accordionBody.appendChild(ul);

    for (const subTopic in syllabus[heading]) {
      const li = document.createElement("li");
      // li.textContent = subTopic;
      li.innerHTML += ` <a href="${syllabus[heading][subTopic]}">${subTopic}</a>`;
      ul.appendChild(li);
    }

    accordionItems.push(accordionItem);
    count++;
  }

  for (const accordionItem of accordionItems) {
    accordion.appendChild(accordionItem);
  }

  // Add bootstrap padding class to accordion body element
  accordion.classList.add("accordion-body-custom");

  // Initialize Bootstrap collapse plugin
  const documentReady = () => {
    const accordionToggles = document.querySelectorAll("[data-bs-toggle='collapse']");
  
    accordionToggles.forEach((accordionToggle) => {
      accordionToggle.addEventListener("click", () => {
        accordionToggle.classList.toggle("collapsed");
      });
    });
  };
  
  documentReady();  
}

