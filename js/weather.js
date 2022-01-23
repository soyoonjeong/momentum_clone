const API_KEY = "9330fc006403913689afd16848f3463c";

const weatherIcon = {
    '01' : 'fas fa-sun',
    '02' : 'fas fa-cloud-sun',
    '03' : 'fas fa-cloud',
    '04' : 'fas fa-cloud-meatball',
    '09' : 'fas fa-cloud-sun-rain',
    '10' : 'fas fa-cloud-showers-heavy',
    '11' : 'fas fa-poo-storm',
    '13' : 'far fa-snowflake',
    '50' : 'fas fa-smog'
};
function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;  
    console.log(lat, lon, API_KEY);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=9330fc006403913689afd16848f3463c&units=metric`;
    fetch(url)
    .then((response)=>response.json())
    .then((data)=>{
        const spans = document.querySelectorAll("#weather span");
        const weather = document.querySelector("#weather i");
        spans[0].innerText = data.name; //city
        spans[1].innerText = Math.ceil(data.main.temp)+"°"; //temp
        weather.className= weatherIcon[(data.weather[0].icon).substr(0,2)] +" fa-2x";
    })
}
function onGeoError(){
    alert("i can't find where you at!");
}





navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);