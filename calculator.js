class Calculator {

    write(node) {
        const selected = document.getElementById(node.id);
        document.getElementById('screen').innerHTML += selected.innerHTML;
    }
    
    evalExpression() {
        let expr = document.getElementById('screen').innerHTML;
        document.getElementById('screen').innerHTML = eval(expr);
    }
    
    deleteScreen() {
        document.getElementById('screen').innerHTML = '';
    }

}

const calculator = new Calculator();

let keys = document.getElementById("calculator").querySelectorAll('.key');

for (let i = 0; i < keys.length; i++) {
    keys[i].addEventListener("click", function ()
    {
        calculator.write(keys[i]);
    });
}

document.getElementById("calculator").querySelector('.delete').addEventListener('click', function () {
    calculator.deleteScreen();
});

document.getElementById("calculator").querySelector('.enter').addEventListener('click', function () {
    calculator.evalExpression();
});