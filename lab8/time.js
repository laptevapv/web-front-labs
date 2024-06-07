function showTime(){
    let today = new Date();
    let currentTime = today.toLocaleTimeString('ru-RU');
    document.getElementById('time').innerHTML = currentTime;
    document.querySelector('.time').innerHTML = currentTime;

    time = document.querySelector('.strelka')
    time.style.transform = `rotate(${new Date().getSeconds() * 6}deg) translate(0, -75px)`; 
}
setInterval(showTime,1000);
