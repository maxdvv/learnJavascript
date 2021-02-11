document.querySelector('#new-event').onclick = (event) => {
    event.preventDefault();
    window.open('./create-event.html', "_self");
}

let eventName = localStorage.getItem('eventName');
let participants = localStorage.getItem('participants');
let day = localStorage.getItem('day');
let time = localStorage.getItem('time');


function addEvent() {
    let array = JSON.parse(localStorage.getItem("array"));
    if (array) {
        const span = "<span class=\"close\">&times;</span>";
        let table = document.querySelector('#tableCalendar');
        let tr = table.querySelectorAll('tr');

        for (let i = 1; i < tr.length; i++){
            let td = tr[i].querySelectorAll('td');
            for (let j = 1; j < td.length; j++) {
                if (array[i][j] != "") {
                    td[j].innerHTML = array[i][j].eventName + span;
                    td[j].classList.add("active-cell");
                }
            }
        }
    } else {
        array = readTableToArray();
        localStorage.setItem('array', JSON.stringify(array));
    }
}

addEvent();

function delEvent() {
    let array = JSON.parse(localStorage.getItem("array"));
    let table = document.querySelector('#tableCalendar');
    let tr = table.querySelectorAll('tr');

    for (let i = 1; i < tr.length; i++){
        let td = tr[i].querySelectorAll('td');
        for (let j = 1; j < td.length; j++) {
            if (td[j].querySelector('.close')) {
                td[j].querySelector('.close').onclick = function () {

                    document.querySelector(".modal-wrapper").style.display = "block";
                    let text = "Are you sure you want to delete \""+ array[i][j].eventName + "\" event?"
                    document.querySelector(".modal-text").textContent = text;

                    document.querySelector(".button-no").onclick = function () {
                        document.querySelector(".modal-wrapper").style.display = "none";
                    }

                    document.querySelector(".button-yes").onclick = function () {
                        document.querySelector(".modal-wrapper").style.display = "none";

                        td[j].innerHTML = "";
                        td[j].classList.remove("active-cell");
                        array[i][j] = "";
                        localStorage.setItem('array', JSON.stringify(array));
                    }

                }
            }
        }
    }


}

delEvent();

// Function that filter participants
document.querySelector('#user-select').onchange = function() {
    console.log("Click select");
    let participantsIndex = document.querySelector('#user-select').selectedIndex;
    let participants = document.querySelector('#user-select').options[participantsIndex].text;
    let array = JSON.parse(localStorage.getItem("array"));
    if (array) {
        const span = "<span class=\"close\">&times;</span>";
        let table = document.querySelector('#tableCalendar');
        let tr = table.querySelectorAll('tr');

        for (let i = 1; i < tr.length; i++){
            let td = tr[i].querySelectorAll('td');
            for (let j = 1; j < td.length; j++) {
                if (array[i][j] != "" && participants === "All members"){
                    td[j].innerHTML = array[i][j].eventName + span;
                    td[j].classList.add("active-cell");
                } else if (array[i][j] != "" && array[i][j].participants === participants) {
                    td[j].innerHTML = array[i][j].eventName + span;
                    td[j].classList.add("active-cell");
                } else {
                    td[j].innerHTML = "";
                    td[j].classList.remove("active-cell");
                }

            }
        }
    }
}

function readTableToArray() {
    let table = document.querySelector('#tableCalendar');
    let tr = table.querySelectorAll('tr');
    let th = table.querySelectorAll('th');

    let arrayTd = [];
    let arrayTh = [];

    for (let i = 0; i < th.length; i++) {
        arrayTh[i] = th[i].innerText;
    }

    for (let i = 0; i < tr.length; i++){
        let td = tr[i].querySelectorAll('td');
        arrayTd[i] = [];
        for (let j = 0; j < td.length; j++) {
            arrayTd[i][j] = td[j].innerHTML;
        }
    }
    arrayTd.shift();
    arrayTd.unshift(arrayTh);
    return arrayTd;
}