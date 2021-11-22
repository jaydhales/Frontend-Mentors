const hours = {
    daily: {
        work: 5,
        play: 1,
        study: 0,
        exercise: 1,
        social: 1,
        selfCare: 0
    },
    weekly: {
        work: 40,
        play: 8,
        study: 14,
        exercise: 8,
        social: 8,
        selfCare: 5
    },
    monthly: {
        work: 164,
        play: 40,
        study: 70,
        exercise: 60,
        social: 30,
        selfCare: 25
    }
};


document.querySelectorAll('.nav-link').forEach((link) => {
    link.addEventListener('click', (e) => {
        switch (e.target.textContent) {
            case 'Daily':
                addContent(hours.daily);
            break;

            case 'Weekly':
                addContent(hours.weekly);
            break;

            case 'Monthly':
                addContent(hours.monthly);
            break;
            
            default:
                addContent(hours.daily);
            break;
        }
    })
})

function addContent (period) {
    document.querySelectorAll('.activity').forEach((act) => {
        let cardTitle = act.querySelector('.card-title');
        let cardTime = act.querySelector('.card-time');

        switch (cardTitle.textContent) {
            case 'Work':
                cardTime.textContent = `${period.work}`
            break;
            case 'Play':
                cardTime.textContent = `${period.play}`
            break;
            case 'Study':
                cardTime.textContent = `${period.study}`
            break;
            case 'Exercise':
                cardTime.textContent = `${period.exercise}`
            break;
            case 'Social':
                cardTime.textContent = `${period.social}`
            break;
            case 'Self Care':
                cardTime.textContent = `${period.selfCare}`
            break;
        
            default:
                break;
        }
    });

    const values = Object.values(period);

    let totalTime = document.getElementById('total-time');

    function timePeriod () {
        switch (period) {
            case hours.daily:
               return 'day'
            break;

            case hours.weekly:
                return 'week'
            break;

            case hours.monthly:
                return 'month'
            break;
        
            default:
                break;
        };
    }

    totalTime.textContent = values.reduce((a,b) => a+b) + ' hours per ' + timePeriod();
}