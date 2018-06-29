let visibility=false
const showInfo=()=>{
        visibility=!visibility
        render();
    }
const render=()=>{
    var template=(
        <div>
            <h1>Visibility Toggle</h1>
            <button onClick={showInfo}>{visibility ? 'Hide details':'Show details'}</button>
            {visibility && (
                <div>
                    <p>You can see the details!</p>
                </div>
            )}
        </div>

       
       
    )
    var appRoot=document.getElementById('app')
    ReactDOM.render(template,appRoot)
}

render();