function generateSide(start, end) {
    let num1 = 0;
    let num2 = 0;
    num1 = Math.floor(Math.random() * 4);
    num2 = Math.floor(Math.random() * 4);
    while (num1 == num2) {
        num2 = Math.floor(Math.random() * 4);
    }
    start.push(num1);
    end.push(num2);
    document.getElementById('output').innerHTML = num1 + " " + num2;
}
function generateLocation(x, y) {
    let num1 = 0;
    let num2 = 0;
    num1 = Math.floor(Math.random() * 399);
    num2 = Math.floor(Math.random() * 399);
    while (num1 == num2) {
        num2 = Math.floor(Math.random() * 399);
    }
    x.push(num1);
    y.push(num2);
    document.getElementById('output').innerHTML = num1 + " " + num2;
}
function hub() {
    let numOfTimes = parseFloat(document.getElementById('numOfTimes').value);
    let start = [];
    let end = [];
    let x = [];
    let y = [];
    for (let i = 0; i < numOfTimes; i++) {
        generateSide(start, end);
        generateLocation(x, y);
    }
    console.log(start);
    console.log(end);
    console.log(x);
    console.log(y);
}