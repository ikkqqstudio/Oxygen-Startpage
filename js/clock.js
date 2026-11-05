let hrs = document.getElementById("hour");
let min = document.getElementById("min");
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = (currentTime.getHours() < 10 ? "0" : "")
        + currentTime.getHours();
    min.innerHTML = (currentTime.getMinutes() < 10 ? "0" : "")
        + currentTime.getMinutes();
}) 
