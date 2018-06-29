console.log('app connected')
var appRoot= document.getElementById('app')
//JSX -Javascript XML Extension
var app={
    title:'Hello World!',
    subtitle:'hello',
    options:[]
}


const onFormSubmit=(e)=>{
    e.preventDefault()
    const option=e.target.elements.option.value;

    if(option){
        app.options.push(option);
        e.target.elements.option.value='';
    }
    renderFormFunction()
}

const removeAll=()=>{
    app.options=[];
    renderFormFunction();
}

const onMakeDecision=()=>{
    const randomNum=Math.floor(Math.random()*app.options.length);
    const option=app.options[randomNum];
    alert(option)
}

//Create a render function that creates a new JSX.

const renderFormFunction=()=>{
    const template=(
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0 ? 'Here are your options':'no options'}</p>
            <p>{app.options.length}</p>
            <ol>
                {
                    app.options.map(option=>{
                        return <li key={option}>options:{option}</li>
                    })
                
                }
            </ol>
                {[<p key="1">One</p>, <p key="2">Two</p>]}
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            <button disabled={app.options.length===0} onClick={removeAll}>Remove all</button>
            <button onClick={onMakeDecision}>Random list</button>
        </div>
)
ReactDOM.render(template,appRoot)

}

renderFormFunction();