const dynamic = document.getElementById('dynamic')

dynamic.addEventListener('click', printHello);
function printHello() {
    window.alert("Are you sure to greet?");
    dynamic.textContent = `greetings!`;
}