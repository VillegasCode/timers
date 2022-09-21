//print on the screen the update hour every second

//the showDate variable will contain a dynamic value to 'date' element of the index.html
let showDate = document.getElementById('date');

//the showClock variable will contain a dynamic value to 'clock' element of the index.html
let showClock = document.getElementById('clock');

//fecha variable is an instance the 'Date' object of Javascript
let fecha = new Date();

//diaSemana is an array to days of the week
let diaSemana = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

//mesAnio is an array to months of the year
let mesAnio = ['January', 'February', 'March', 'April', 'May', 'June', ' July', 'Agust', 'September', 'October', 'November', 'December'];

//the showDate variable will store and will show it the DATE of today in the 'date' element of the index.html
showDate.innerHTML = `${diaSemana[fecha.getDay()]}, ${fecha.getDate()} of ${mesAnio[fecha.getMonth()]} of ${fecha.getFullYear()}`;

//setInterval is a METHOD to create timers
setInterval(()=>{
    let hora = new Date();
    //the showClock variable will store and will show the CLOCK UPDATED in the 'clock' element of the index.html
    showClock.innerHTML = hora.toLocaleTimeString();
}, 1000);


//setInterval ejecuta una función cada cierto tiempo

let segundos = 15;

let cuentaRegresiva = document.getElementById('countdown0');
let fecha2 = document.getElementById('date1');

fecha2.innerHTML = `${mesAnio[fecha.getMonth()]}, ${fecha.getDate()} of ${fecha.getFullYear()}`;

function conteo(){
    cuentaRegresiva.innerHTML = `Launch in ${segundos} segundos`;
    segundos--;
    if (segundos == 0) {
        clearInterval(lanzamiento);
        cuentaRegresiva.innerHTML = `Launch is over`
    }
}

let lanzamiento = setInterval(conteo, 1000);

//setTimeOut Anidado
let segundos1 = 0;
let countUp = document.getElementById('countup0');
let fecha3 = document.getElementById('date2');

fecha3.innerHTML = `${fecha.getFullYear()}, ${mesAnio[fecha.getMonth()]} ${fecha.getDate()}`;
function incremento() {
    countUp.innerHTML = segundos1;
    segundos1++;
    incrementoID = setTimeout(incremento, 1000);
}

let incrementoID = setTimeout(incremento, 1000);