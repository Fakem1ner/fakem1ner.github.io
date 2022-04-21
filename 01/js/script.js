form = document.querySelector('.form');
result = document.querySelector('._result');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  try {
    let nickname = document.querySelector('#nickname').value;
    let favouriteYoutuber = document.querySelector('#favouriteyoutuber').value;
    let favouriteGame = document.querySelector('.form__option .form__radio:checked').value;
    let about = document.querySelector('#about').value;
    about = about.toLowerCase();
    about = about.split('%2c').join(', ');
    about = about.split('+').join(' ');

    if(favouriteYoutuber.toLowerCase() != 'fakeminer') {
      result.innerHTML = `Привет! Свое имя я тебе не скажу, но мой ник - ${nickname}. Мой любимый ютубер - ${favouriteYoutuber}. Я играю в разные игры, но моя любимая - ${favouriteGame}. А еще я ${about}`;
    }
    else {
      alert('Значение поля "Любимый ютубер" не может быть Fakeminer!');
    }
  }
  catch {
    alert('Вы не заполнили одно или несколько полей!');
  }
});