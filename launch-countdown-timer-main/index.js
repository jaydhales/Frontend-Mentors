let timers = document.querySelectorAll('.timer p');
const countDownDate = new Date('Dec 1, 2021 00:00:00').getTime();


setInterval(() => {
    let now = new Date().getTime();

    let interval = countDownDate - now;
    let days = Math.floor(interval/(1000*60*60*24));
    let hours =  Math.floor( ( (interval % (1000*60*60*24)) / (1000*60*60)) );
    let minutes =  Math.floor( ( ((interval % (1000*60*60*24)) % (1000*60*60))) / (1000*60) );
    let seconds =  Math.floor( ( (((interval % (1000*60*60*24)) % (1000*60*60))) % (1000*60)) /1000 );

    if (interval > 0) {
        timers.forEach((time) => {
            switch (time.className) {
                case 'days':
                    time.innerHTML = `${days}`
                break;
                
                case 'hours':
                    time.innerHTML = `${hours}`
                break;
    
                case 'minutes':
                    time.innerHTML = `${minutes}`
                break;
    
                case 'seconds':
                    time.innerHTML = `${seconds}`
                break;
                
    
                default:
                break;
            }
        })
    } else {
        timers.forEach((time) => {
            time.innerHTML = '- -';
        })
    }
    
}, 1000);

