const keys = [
    {
        id: 0,
        style: 'screen',
        text: '',
        action: 'write'
    },
    {
        id: 1,
        style: 'key',
        text: '9',
        action: 'write'
    },
    {
        id: 2,
        style: 'delete',
        text: 'AC',
        action: 'delete'
    },
    {
        id: 3,
        style: 'action',
        text: '/',
        action: 'write'
    },
    {
        id: 4,
        style: 'action',
        text: '-',
        action: 'write'
    },
    {
        id: 5,
        style: 'key',
        text: '6',
        action: 'write'
    },
    {
        id: 6,
        style: 'key',
        text: '7',
        action: 'write'
    },
    {
        id: 7,
        style: 'key',
        text: '8',
        action: 'write'
    },
    {
        id: 8,
        style: 'action',
        text: '+',
        action: 'write'
    },
    {
        id: 9,
        style: 'key',
        text: '3',
        action: 'write'
    },
    {
        id: 10,
        style: 'key',
        text: '4',
        action: 'write'
    },
    {
        id: 11,
        style: 'key',
        text: '5',
        action: 'write'
    },
    {
        id: 12,
        style: 'action',
        text: '*',
        action: 'write'
    },
    {
        id: 13,
        style: 'key',
        text: '0',
        action: 'write'
    },
    {
        id: 13,
        style: 'key',
        text: '1',
        action: 'write'
    },
    {
        id: 13,
        style: 'key',
        text: '2',
        action: 'write'
    },
    {
        id: 13,
        style: 'action',
        text: 'Enter',
        action: 'enter'
    },
];

drawCalculator();
drawKeys();

function drawCalculator() {
    document.getElementById('calculator').classList.add('calculator-base');
    document.getElementById('screen').classList.add('calculator-base');
}

function drawKeys() {


    for (let i = 0; i < keys.length; i++) {
        let node = document.createElement('div');

        let textnode = document.createTextNode(keys[i].text);

        node.appendChild(textnode);
        node.classList.add(keys[i].style);
        node.id = keys[i].id;

        if (keys[i].action === 'write') {
            node.addEventListener('click', function () { write(keys[i]); }, false);
        } else if (keys[i].action === 'enter') {
            node.addEventListener('click', function () { evalExpression(); }, false);
        } else if (keys[i].action === 'delete') {
            node.addEventListener('click', function () { deleteScreen(); }, false);
        }

        document.getElementById("calculator").appendChild(node);
    }

}

function write(node) {
    const selected = document.getElementById(node.id);
    document.getElementById('0').innerHTML += selected.innerHTML;
}

function evalExpression() {
    let expr = document.getElementById('0').innerHTML;
    document.getElementById('0').innerHTML = eval(expr);
}

function deleteScreen() {
    document.getElementById('0').innerHTML = '';
}


