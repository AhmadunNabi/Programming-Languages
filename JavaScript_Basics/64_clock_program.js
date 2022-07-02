const myLabel = document.getElementById("myLabel");
update();
setInterval(update, 1000);

function update() {
    let date = new Date();
    myLabel.innerHTML = formatTime(date);

    function formatTime(date) {
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        let amOrPm = hours >= 12 ? "pm" : "am";
        if (hours >= 12) {
            hours = (hours % 12) || 12;
        }
        hours = formalZeros(hours);
        minutes = formalZeros(minutes);
        seconds = formalZeros(seconds);

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }
    function formalZeros(time) {
        time = time.toString();
        return time.length < 2 ? "0" + time : time;
    }
}