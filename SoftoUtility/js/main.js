let menuIcon = document.querySelector('.menu__icon');
let menu = document.querySelector('.menu');
let menuClose = document.querySelector('.menu__close');

let months = [
    'января', 'февраля', 'марта', 
    'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября',
    'октября', 'ноября', 'декабря'
]

menuIcon.addEventListener('click', function() {
    menu.classList.toggle('open');
});
menuClose.addEventListener('click', function () {
    menu.classList.remove('open');
});

function digitalClock() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();

    if (hours < 10) hours = `0${hours}`;
    if (minutes < 10) minutes = `0${minutes}`;
    if (day < 10) day = `0${day}`
    if (month < 10) month = `0${month}`

    document.getElementById("clock").innerHTML = `${hours}:${minutes} <br> ${day}.${month}.${year}`;
    setTimeout(digitalClock, 1000);
    document.querySelector('#clock_tip').innerHTML = `14 ${months[date.getMonth()]} ${year}`
}

digitalClock();