// function renderSyllabus(syllabus) {
//   const accordion = document.getElementById("syllabus");
//   const accordionItems = [];
//   let count = 0;

//   for (const heading in syllabus) {
//     const accordionItem = document.createElement("div");
//     accordionItem.classList.add("accordion-item");

//     const accordionHeader = document.createElement("h2");
//     accordionHeader.classList.add("accordion-header");
//     accordionHeader.setAttribute("id", `heading${count}`);

//     const accordionButton = document.createElement("button");
//     accordionButton.classList.add("accordion-button");
//     accordionButton.setAttribute("type", "button");
//     accordionButton.setAttribute("data-bs-toggle", "collapse");
//     accordionButton.setAttribute("data-bs-target", `#collapse${count}`);
//     accordionButton.setAttribute("aria-expanded", "false");
//     accordionButton.setAttribute("aria-controls", `collapse${count}`);
//     accordionButton.textContent = heading;

//     accordionHeader.appendChild(accordionButton);
//     accordionItem.appendChild(accordionHeader);

//     const accordionBody = document.createElement("div");
//     accordionBody.classList.add(
//       "accordion-collapse",
//       "collapse",
//       "py-2",
//       "px-3"
//     );
//     accordionBody.setAttribute("id", `collapse${count}`);
//     accordionBody.setAttribute("aria-labelledby", `heading${count}`);
//     accordionBody.setAttribute("data-bs-parent", "#syllabus");
//     accordionItem.appendChild(accordionBody);

//     const ul = document.createElement("ul");
//     ul.classList.add("p-3");
//     accordionBody.appendChild(ul);

//     for (const subTopic in syllabus[heading]) {
//       const li = document.createElement("li");
//       // li.textContent = subTopic;
//       li.innerHTML += ` <a href="${syllabus[heading][subTopic]}">${subTopic}</a>`;
//       ul.appendChild(li);
//     }

//     accordionItems.push(accordionItem);
//     count++;
//   }

//   for (const accordionItem of accordionItems) {
//     accordion.appendChild(accordionItem);
//   }

//   // Add bootstrap padding class to accordion body element
//   accordion.classList.add("accordion-body-custom");

//   // Initialize Bootstrap collapse plugin
//   const documentReady = () => {
//     const accordionToggles = document.querySelectorAll(
//       "[data-bs-toggle='collapse']"
//     );

//     accordionToggles.forEach((accordionToggle) => {
//       accordionToggle.addEventListener("click", () => {
//         accordionToggle.classList.toggle("collapsed");
//       });
//     });
//   };

//   documentReady();
// }

// function renderSyllabusBullets(syllabus) {
//   for (const keys in syllabus) {
//     const container = document.getElementById("syllabus");

//     const ul = document.createElement("ul");
//     container.appendChild(ul);

//     const h6 = document.createElement("h6");
//     h6.textContent = keys;
//     ul.appendChild(h6);

//     for (const topic in syllabus) {
//       const li = document.createElement("li");
//       const anchor = document.createElement("a");
//       anchor.textContent = subTopic;
//       anchor.href = syllabus.topic[subTopic];
//       li.appendChild(anchor);
//       ul.appendChild(li);
//       console.log(topic);
//       console.log(syllabus[topic]);
//     }

//     for (const subTopic in syllabus[heading]) {
//       const li = document.createElement("li");
//       const anchor = document.createElement("a");
//       anchor.textContent = subTopic;
//       anchor.href = syllabus[heading][subTopic];
//       li.appendChild(anchor);
//       ul.appendChild(li);
//     }
//   }
// }

function func(syllabusData) {
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
