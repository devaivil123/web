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