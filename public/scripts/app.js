'use strict';

console.log('app connected');

//JSX -Javascript XML Extension
var app = {
    title: 'Hello World!',
    subtitle: 'Hello Michigan',
    options: ['One', 'Two']
};

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        app.options.length > 0 ? app.title.toUpperCase() : 'No options given'
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        '(',
        app.subtitle,
        ')'
    )
);

var user = {
    name: 'Green'

};
var userName = 'Green';
var userAge = 21;
var test = 24;
// var location='Michigan';
function getName(name) {
    if (name) {
        return React.createElement(
            'p',
            null,
            ' User name is ',
            user.name
        );
    } else {
        return undefined;
    }
}
var template2 = React.createElement(
    'div',
    null,
    getName(user.name),
    React.createElement(
        'p',
        null,
        user.age ? user.age : 'No age was given'
    ),
    test && test >= 18 && test
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
// ReactDOM.render(template2,appRoot)
