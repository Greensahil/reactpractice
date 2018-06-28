'use strict';

console.log('app connected');

//JSX -Javascript XML Extension
var app = {
    title: 'Hello World!',
    subtitle: 'Hello Michigan',
    options: ['One', 'Two']
};

var count = 0;
var addOne = function addOne() {
    count++;
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    renderCounterApp();
};

var appRoot = document.getElementById('app');

// ReactDOM.render(template2,appRoot)

var renderCounterApp = function renderCounterApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            'Count:',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset },
            'reset'
        )
    );
    ReactDOM.render(template, appRoot);
};
renderCounterApp();
