function countdown() {
    const targetDate = new Date('2024-10-22T00:00:00').getTime();
    const x = setInterval(function () {
        const now = new Date().getTime();
        const distance = targetDate - now;

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById('days').innerHTML = days + ' <span>kun</span>';
        document.getElementById('hours').innerHTML = hours + ' <span>soat</span>';
        document.getElementById('minutes').innerHTML = minutes + ' <span>daqiqalar</span>';
        document.getElementById('seconds').innerHTML = seconds + ' <span>soniyalar</span>';

        if (distance < 0) {
            clearInterval(x);
            document.getElementById('days').innerHTML = '00 <span>kun</span>';
            document.getElementById('hours').innerHTML = '00 <span>soat</span>';
            document.getElementById('minutes').innerHTML = '00 <span>daqiqalar</span>';
            document.getElementById('seconds').innerHTML = '00 <span>soniyalar</span>';
        }
    }, 1000);
}

countdown();
