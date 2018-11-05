let start = Date.now();
setInterval(timer, 1000);

function timer() {
    let delta = Math.floor((new Date() - start) / 1000);

    let hours = Math.floor(delta / 3600);
    document.getElementById("hours").innerHTML = formatDoubleDigit(hours);

    delta = delta - hours * 3600;
    let minutes = Math.floor(delta / 60);
    document.getElementById("minutes").innerHTML = formatDoubleDigit(minutes);

    delta = delta - minutes * 60;
    let seconds = delta;
    document.getElementById("seconds").innerHTML = formatDoubleDigit(seconds);
}

function formatDoubleDigit(number) {
    return number < 10 ? "0" + number.toString() : number.toString();
}