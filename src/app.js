console.log('app connected')

//JSX -Javascript XML Extension
var app={
    title:'Hello World!',
    subtitle:'Hello Michigan',
    options:['One','Two']
}

var template= (
<div>
    <p>{app.options.length > 0 ? app.title.toUpperCase():'No options given'}</p>
    {app.subtitle && <p>({app.subtitle})</p>}
</div>
);

var user={
    name:'Green',

}
var userName='Green';
var userAge=21;
var test=24;
// var location='Michigan';
function getName(name){
    if(name){
        return <p> User name is {user.name}</p>
    }else{
        return undefined
    }
}
var template2=(
    <div>
        {getName(user.name)}
        <p>{user.age ? user.age:'No age was given'}</p>
        {(test && test>=18) && test}
    </div>
)


var appRoot= document.getElementById('app')

 ReactDOM.render(template,appRoot);
// ReactDOM.render(template2,appRoot)