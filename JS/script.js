function logged(elemento) {
    if (elemento.innerText == 'Login') {
        elemento.innerText = 'Logged';
    } else {
        elemento.innerText = 'Login';
    }
}

function remove(elemento) {
    elemento.style.visibility = 'hidden';
}
setInterval(displayhello, 3000);

function displayhello () {
    console.log('hello');
}