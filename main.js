btnElement = document.querySelector('.btn');
answerElement = document.querySelector('.answer');
NameElement = document.querySelector('#name');
SurnameElement = document.querySelector('#surname');
btnElement.addEventListener("click", function(){
    answerElement.textContent=`Здравствуйте, ${NameElement.value} ${SurnameElement.value}!`
});

