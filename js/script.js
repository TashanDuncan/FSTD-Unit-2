/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
function showPage(list, page) {
  const start = page * 9 - 9;
  const end = page * 9;

  const studentList = document.getElementsByClassName('student-list')[0];

  studentList.innerHTML = '';

  for (let i = start; i >= start && i < end; i++) {
    let student = document.createElement('li');
    student.classList.add('student-item', 'cf');
    student.innerHTML = `<div class="student-details">
      <img class="avatar" src="${list[i].picture.large}" alt="Profile Picture">
      <h3>${list[i].name.first} ${list[i].name.last}</h3>
      <span class="email">${list[i].email}</span>
    </div>
    <div class="joined-details">
      <span class="date">Joined ${list[i].registered.date}</span>
    </div>`;
    studentList.insertAdjacentElement('beforeend', student);
  }
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function addPagination(list) {
  //divide the total students by students per page (9) then round up to nearest whole number using Math.ceil
  const pageButtons = Math.ceil(list.length / 9);
  const linkList = document.getElementsByClassName('link-list')[0];

  //Remove any content already in the UL
  linkList.innerHTML = '';

  //loop over pageButtons and add a button to the HTML on each itteration
  for (let i = 1; i <= pageButtons; i++) {
    let button = document.createElement('li');
    button.innerHTML = `<button type="button">${i}</button>`;
    linkList.insertAdjacentElement('beforeend', button);
  }

  //add active status to first Pagination button
  const firstPageButton = document.getElementsByTagName('button')[0];
  firstPageButton.classList.add('active');

  //event listener on click of Pagination button
  linkList.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
      const buttons = document.getElementsByTagName('button');

      //loop over all buttons and remove active Class
      for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList = '';
      }
      //add active class to the clicked on pagination button
      e.target.classList.add('active');

      //call the showpage function using the inner html of the button clicked to identify the page number after converting it to an interger.
      showPage(data, parseInt(e.target.innerHTML, 10));
    }
  });
}

// Call functions
showPage(data, 1);
addPagination(data);
