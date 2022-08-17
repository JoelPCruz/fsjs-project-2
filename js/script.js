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

function showPage (list, page) {
   // Variables which will display start and end index of student data.
   let startIndex = (page * 9) - 9;
   let endIndex = page * 9;

   let studentListUl = document.querySelector(".student-list");

   studentListUl.innerHTML = '';
   let html = '';
   // Looping over the list
   for( let i = 0; i < list.length; i++) {
      // if I is greater than or equal to the startIndex (0) AND less than the endIndex (9).
      if( i >= startIndex && i < endIndex) {
         html +=
            `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src=${list[i].picture.large} alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>
            `;
      }
   }
   studentListUl.insertAdjacentHTML('beforeend', html)
   
}





/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination (list) {
   // console.log(list);
 
   // variable show the number of the pagination button needed
   const numOfPages = Math.ceil(list.length / 9)
   // console.log(numOfPages);
   const linkListUL = document.querySelector('.link-list')
   // the list is set to am empty string to remove data if present
   linkListUL.innerHTML = ''
   let buttonHTML = ''
 
   for (let i = 1; i <= numOfPages; i++) {
     buttonHTML += `
      <li>
        <button type="button">${i}</button>
      </li>    
      `
     // console.log(buttonHTML);
   }
 
   linkListUL.insertAdjacentHTML('beforeend', buttonHTML)
 
   const button = document.querySelectorAll("button[type='button']")
   button[0].className = 'active'
   // console.log(button);
 
   linkListUL.addEventListener('click', (e) => {
     const buttonClicked = e.target
     if (buttonClicked.tagName === 'BUTTON') {
       const activeClassButton = document.getElementsByClassName('active')
       activeClassButton[0].className = ''
       buttonClicked.className = 'active'
       showPage(list, buttonClicked.textContent)
       // console.log(activeClassButton);
     }
   })
 }
 
// Call functions

showPage(data, 1);
addPagination(data);
