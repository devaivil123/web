function setRussian() {
    let name = document.getElementById('student');
    name.innerHTML = 'Иван Демидов';

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Факультет бизнеса, ФБИ-02, 3 курс, 2022';

    document.getElementById('your-name').innerHTML = 'Ваше имя';
    document.getElementById('input-name').placeholder = 'Введите имя';

    document.getElementById('your-surname').innerHTML = 'Ваша фамилия';
    document.getElementById('input-surname').placeholder = 'Введите фамилию';

    document.getElementById('your-age').innerHTML = 'Ваш возраст';
    document.getElementById('input-age').placeholder = 'Введите возраст';

    document.getElementById('ok-button').value = 'ок';

    document.getElementById('reset-button').value = 'сброс';

}

function setEnglish() {    
    let name = document.getElementById('student');
    name.innerHTML = 'Ivan Demidov' 

    let footer = document.getElementById('footer');
    footer.innerHTML = 'Faculty of Business, FBI-02, 3d year, 2022';

    document.getElementById('your-name').innerHTML = 'Your name';
    document.getElementById('input-name').placeholder = 'Enter your name';

    document.getElementById('your-surname').innerHTML = 'Your surname';
    document.getElementById('input-surname').placeholder = 'Enter your surname';

    document.getElementById('your-age').innerHTML = 'Your age';
    document.getElementById('input-age').placeholder = 'Enter your age';

    document.getElementById('ok-button').value = 'ok';

    document.getElementById('reset-button').value= 'reset';

    
}

function showAlert() {
    let userName = document.getElementById('input-name').value;
    let userSurname = document.getElementById('input-surname').value;
    let userAge = document.getElementById('input-age').value;
    alert('Привет, ' + userName + ' ' + userSurname + '\n' + 'Ваш возраст: ' + userName);
    let r = Math.round(Math.random()*255);
    let g = Math.round(Math.random()*255);
    let b = Math.round(Math.random()*255);
    let color = 'rgb(' + r + ',' + g + ',' + b + ')';
    document.getElementById('user-data').style.backgroundColor = color;
}