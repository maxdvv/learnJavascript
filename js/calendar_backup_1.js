document.querySelector('#new-event').onclick = (event) => {
    event.preventDefault();
    window.open('./create-event.html', "_self");
}

let eventName = localStorage.getItem('eventName');
let participants = localStorage.getItem('participants');
let day = localStorage.getItem('day');
let time = localStorage.getItem('time');

document.querySelector('.active-cell').innerHTML = eventName + "<span class=\"close\">&times;</span>";


let closeEl = document.querySelectorAll('.close');
let actCell = document.querySelectorAll('.active-cell');


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
        //console.log(i, j, td[j].innerHTML);
        arrayTd[i][j] = td[j].innerHTML;
    }
}
arrayTd.shift();
arrayTd.unshift(arrayTh);
console.log(arrayTd);


for (let i = 0; i < closeEl.length; i++) {
    closeEl[i].onclick = function () {
        actCell[i].innerHTML = "";
        actCell[i].classList.remove("active-cell");
        localStorage.removeItem("eventName");

    }
}

/*let baseArray = [
    { name: '10:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '11:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '12:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '13:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '14:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '15:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '16:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '17:00', mon: '', tue: '', wed: '', thu: '', fri: '' },
    { name: '18:00', mon: '', tue: '', wed: '', thu: '', fri: '' }
];

let headers = ['Name', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

let table = document.createElement('table');
let headerRow = document.createElement('tr');

headers.forEach(headerText => {
    let header = document.createElement('th');
    let textNode = document.createTextNode(headerText);
    header.appendChild(textNode);
    headerRow.appendChild(header);
});

table.appendChild(headerRow);*/





/*
for (let i = 0; i < allRow.length; i++) {
    for (let j = 0; j < allCell.length; j++) {
        if (allRow[i].innerText === day && allCell[j].innerText === time) {
            console.log(allCell[j]);
            allCell[i].classList.add("active-cell");
            allCell[j].classList.add("active-cell");
        }
    }
}*/

/*for (let i = 0; i < allRow.length; i++) {
    if (allRow[i].innerText === day) {
        for (let j = 0; j < allCell.length; j++) {
            if (allCell[j].innerText === time) {
                allCell[j].classList.add("active-cell");
            }
        }
    }
}*/




/*for (let i = 0; i < allCell.length; i++) {
    if (allCell[i].innerText === time) {
        console.log(allCell[i]);
    }
}

let allRow = document.querySelectorAll('th');

for (let i = 0; i < allRow.length; i++) {
    if (allRow[i].innerText === day) {
        console.log(allRow[i]);
    }
}*/







function delEvent() {

}

function addEvent() {

}