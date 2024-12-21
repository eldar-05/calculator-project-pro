function clearDisplay() {
    document.getElementById('display').value = '';
}
function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}








function appendValue(value) {
    const display = document.getElementById('display');
    if (value === '^') {
        display.value += '**';
    } else {
        display.value += value;
    }
}
function solve() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);//i know thats illegal
    } catch (error) {
        display.value = 'Error!!!!';
    }
}
