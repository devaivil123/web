function Click1(button) {
    if(button.innerHTML == 'Щелчок')
        button.innerHTML = 'Спасибо';
    else
        button.innerHTML = 'Щелчок'
}

function Click2(button) {
    if(button.innerHTML == 'Имя Иван')
        button.innerHTML = 'Фамилия Шевчук';
    else
        button.innerHTML = 'Имя Иван'
}

function Click3(button){
    if(button.innerHTML == 'Имя Евгений')
        button.innerHTML = 'Фамилия Демидов';
    else
        button.innerHTML = 'Имя Евгений'    
}


function Click4(button){
    if(button.innerHTML == 'Нажми меня')
        button.innerHTML = 'Ещё раз нажми';

    else if(button.innerHTML == 'Ещё раз нажми')
        button.innerHTML = 'Ещё';

    else if(button.innerHTML == 'Ещё')
        button.innerHTML = 'Начать сначала';
    else
        button.innerHTML = 'Нажми меня'
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
    if(event.ctrlKey) {
        alert('Нажат Ctrl');
    }

    if (event.altKey) {
		alert('Нажат Alt');
    }

	if (event.shiftKey) {
		alert('Нажат Shift');
    }
}

window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});