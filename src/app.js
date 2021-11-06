import getInputData from "./ui.js";

/******** SUMMARY TAB ********/
let summaryTab = document.getElementById('nav-summary-tab');
let tableBody = document.getElementById('my-table-body');

//add an event listener to the summary-tab. 
//When clicked and class is 'active', get the returned array from ui.js
//and for each array element create a table row + table data and put it in the table body
summaryTab.addEventListener("click", showData);
function showData(){
    if(summaryTab.classList.contains('active')){
        let output = "";

        getInputData().forEach((item) => {
            output += `
                <tr>
                    <td>${item.weekday}</td>
                    <td>${item.activity}</td>
                    <td>${item.startTime}</td>  
                    <td>${item.endTime}</td>
                </tr>
                `;
            tableBody.innerHTML = output;
        });
    }
}

/******* PREVIOS AND NEXT BUTTON-FUNCTIONALITY *******/
//querySelectorAll returns a nodeList, therefore we must loop through the list 
//and put the eventListener on every button element
let btn = document.querySelectorAll('.btn');

for (var i = 0 ; i < btn.length; i++) {
    btn[i].addEventListener('click' , openNextOrPreviousTab); 
 }

//this function checks every button classList and triggers a click on the previous or on the next tab
function openNextOrPreviousTab(e) {
    if(e.currentTarget.classList.contains('monday-next')){
        document.getElementById('nav-tuesday-tab').click();
    }
    else if(e.currentTarget.classList.contains('tuesday-previous')){
        document.getElementById('nav-monday-tab').click();
    }
    else if(e.currentTarget.classList.contains('tuesday-next')){
        document.getElementById('nav-wednesday-tab').click();
    }
    else if(e.currentTarget.classList.contains('wednesday-previous')){
        document.getElementById('nav-tuesday-tab').click();
    }
    else if(e.currentTarget.classList.contains('wednesday-next')){
        document.getElementById('nav-thursday-tab').click();
    }
    else if(e.currentTarget.classList.contains('thursday-previous')){
        document.getElementById('nav-wednesday-tab').click();
    }
    else if(e.currentTarget.classList.contains('thursday-next')){
        document.getElementById('nav-friday-tab').click();
    }
    else if(e.currentTarget.classList.contains('friday-previous')){
        document.getElementById('nav-thursday-tab').click();
    }
    else if(e.currentTarget.classList.contains('friday-next')){
        document.getElementById('nav-summary-tab').click();
    }
}

