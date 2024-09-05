const Get_hour = document.querySelector("#hour")
const Get_minute = document.querySelector("#minute")
const Get_Second= document.querySelector("#seconds")


setInterval(function() {
    const DATE = new Date()
    let hour = DATE.getHours()
    let min = DATE.getMinutes()
    let sec = DATE.getSeconds()

    if(hour < 10) {
        hour = '0' + hour
    }
    if(min < 10) {
        min = '0' + min

    }
    if(sec < 10) {
        sec = '0' + sec
        

    }
    Get_hour.innerHTML = hour
    Get_minute.innerHTML = min
    Get_Second.innerHTML = sec
    
}, 1000)