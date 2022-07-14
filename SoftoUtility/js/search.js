let searchField = document.querySelector('#search');

searchField.addEventListener('keydown', function(event) {
    if(event.code == 'Enter') {
        redirect();
    }
});

function redirect() {
    let searchFieldValue = searchField.value
    
    searchFieldValue = searchFieldValue.split('!').join('');
    searchFieldValue = searchFieldValue.split('?').join('');
    searchFieldValue = searchFieldValue.split('.').join('');
    searchFieldValue = searchFieldValue.split('/').join('');
    searchFieldValue = searchFieldValue.split('=').join('');
    searchFieldValue = searchFieldValue.split('+').join('');
    searchFieldValue = searchFieldValue.split(',').join('');
    searchFieldValue = searchFieldValue.split('-').join(' ');
    searchFieldValue = searchFieldValue.split('\\').join('');
    searchFieldValue = searchFieldValue.split(' ').join('+');

    window.location.href = `https://google.com/search?q=${searchFieldValue}`;
}