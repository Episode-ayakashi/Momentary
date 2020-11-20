// [VARS]
const hour_input = document.querySelector('#hour');
const minute_input = document.querySelector('#minute');
const second_input = document.querySelector('#second');
const display = document.querySelector('#display');

const button_start = document.querySelector('#start');
const button_stop = document.querySelector('#stop');

let stop = false;

// [INIT]
init();
function init() { 
    button_start.addEventListener('click', count_down);
    button_stop.addEventListener('click', timer_stop);
};

// [MAIN]
async function count_down() { 
    button_start.setAttribute('disabled', '')
    stop = false;

    let hour = hour_input.value;
    let minute = minute_input.value;
    let second = second_input.value;

    while (second != 0 || hour != 0 || minute != 0) { 
        if (stop == true) { 
            break;
        }
        if (minute == 0 && hour != 0 && second == 0) { 
            hour -= 1;
            minute = 60;
        }
        if (second == 0) { 
            minute -= 1;
            second = 60;
        }

        second -= 1;
        display.textContent = `${hour} : ${minute} : ${second}`
        
        await sleep(1000);
    }
};

function timer_stop() { 
    stop = true;
    button_start.removeAttribute('disabled');
    display.textContent = '-- : -- : --'
}

function sleep(ms) { 
    return new Promise(resolve => setTimeout(resolve, ms))
}