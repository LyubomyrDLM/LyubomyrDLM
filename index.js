function updateClock() {
    const clock = document.querySelector('.clock');
    clock.innerText = new Date().toLocaleTimeString();
    clock.classList.add('highlight');
}

setInterval(updateClock, 1000);

function myMap() {
    let mapCanvas = document.getElementById("map");
    let mapOptions = {
        center: new google.maps.LatLng(49.93121859727334, 23.56968643707822),
        zoom: 10
    };
    let map = new google.maps.Map(mapCanvas, mapOptions);
}