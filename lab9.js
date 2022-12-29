function click1(button) {
    if(button.innerHTML == 'Щелчок')
    button.innerHTML = 'Спасибо';
    else 
    button.innerHTML = 'Щелчок';
}

function click2(button) {
    if(button.innerHTML == 'Иван')
    button.innerHTML = 'Шевчук';
    else
    button.innerHTML = 'Иван';
}

function click3(button) {
    if(button.innerHTML == 'Евгений')
    button.innerHTML = 'Демидов';
    else
    button.innerHTML = 'Евгений';
}

function click4(button) {
    if(button.innerHTML == 'Нажми меня')
    button.innerHTML = 'Ещё раз нажми';

    else if(button.innerHTML == 'Ещё раз нажми')
    button.innerHTML = 'Ещё';

    else if(button.innerHTML == 'Ещё')
    button.innerHTML = 'Начать сначала';
    else
    button.innerHTML = 'Нажми меня';
}

function showCoords(event) {
    event.target.innerHTML = 'x = ' + event.offsetX + ', y = ' + event.offsetY;
    if(event.ctrlKey) {
        alert('Нажата клавиша Ctrl');
    }

    if(event.altKey) {
        alert('Нажата клавиша Alt');
    }

    if(event.shiftKey) {
        alert('Нажата клавиша Shift');
    }
}


window.addEventListener('DOMContentLoaded', function() {
    let coords = document.querySelector('#coords');
    coords.addEventListener('mousemove', showCoords);
});

function fokyc(tag) {
    tag.style.color = "blue"

    if(tag.style.color = "blue")
        span.style.fontsize = "28px";
    else
        ag.style.color = "blue"
}