console.log('app connected')

//JSX -Javascript XML Extension
var app={
    title:'Hello World!',
    subtitle:'Hello Michigan',
    options:['One','Two']
}

let count=0;
const addOne=()=>{
    count++;
    renderCounterApp();
}
const minusOne=()=>{
    count--;
    renderCounterApp()
}

const reset=()=>{
    count=0;
    renderCounterApp()
}


var appRoot= document.getElementById('app')

 
// ReactDOM.render(template2,appRoot)

const renderCounterApp=()=>{
    var template= (
        <div>
           <h1>Count:{count}</h1>
           <button onClick={addOne}>+1</button>
           <button onClick={minusOne}>-1</button>
           <button onClick={reset}>reset</button>
        </div>
        );
        ReactDOM.render(template,appRoot);


}
renderCounterApp();