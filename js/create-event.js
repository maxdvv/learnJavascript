document.querySelector('#create').onclick = (event) => {
    event.preventDefault();

    let eventName = document.getElementById('eventName').value;
    let participantsIndex = document.getElementById('participants').selectedIndex;
    let participants = document.getElementById('participants').options[participantsIndex].text;

    let dayIndex = document.getElementById('day').selectedIndex;
    let day = document.getElementById('day').options[dayIndex].text;

    let timeIndex = document.getElementById('time').selectedIndex;
    let time = document.getElementById('time').options[timeIndex].text;

    let array = JSON.parse(localStorage.getItem("array"));
    //console.log(array);
    if (eventName) {

        for (let i = 0; i < array.length; i++){
            for (let j = 0; j < array[0].length; j++) {
                //console.log(array[i][j]);
                if (array[0][j] === day && array[i][0] === time) {
                    if (array[i][j] === ""){
                        array[i][j] = {'eventName': eventName, 'participants': participants};
                        localStorage.setItem('array', JSON.stringify(array));
                        localStorage.setItem('i', i);
                        localStorage.setItem('j', j);
                        console.log(i, j, array[i][j]);

                        localStorage.setItem('eventName', eventName);
                        localStorage.setItem('participants', participants);
                        localStorage.setItem('day', day);
                        localStorage.setItem('time', time);

                        console.log(eventName);
                        console.log(participants);
                        console.log(day);
                        console.log(time);

                        window.open('./index.html', "_self");
                    } else {
                        popupError();
                    }
                }
            }
        }
    } else {
        popupError("Failed to create an event. Name of the event not specified.");
    }
}

function popupError(text) {
    let popup = document.getElementById("popup-error");
    let close = document.querySelector('.cross2');
    if (text){
        document.querySelector('#text').textContent = text;
    }

    popup.style.display = "flex";
    close.onclick = function (){
        popup.style.display = "none";
    }
}

document.querySelector('#cancel').onclick = (event) => {
    event.preventDefault();

    window.open('./index.html', "_self");
}