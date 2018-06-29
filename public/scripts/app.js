'use strict';

console.log('app connected');
var appRoot = document.getElementById('app');
//JSX -Javascript XML Extension
var app = {
    title: 'Hello World!',
    subtitle: 'hello',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    e.preventDefault();
    var option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderFormFunction();
};

var removeAll = function removeAll() {
    app.options = [];
    renderFormFunction();
};

//Create a render function that creates a new JSX.

var renderFormFunction = function renderFormFunction() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'no options'
        ),
        React.createElement(
            'p',
            null,
            app.options.length
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    'options:',
                    option
                );
            })
        ),
        [React.createElement(
            'p',
            { key: '1' },
            'One'
        ), React.createElement(
            'p',
            { key: '2' },
            'Two'
        )],
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        )
    );
    ReactDOM.render(template, appRoot);
};

renderFormFunction();
