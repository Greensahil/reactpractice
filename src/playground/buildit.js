

class Visibility extends React.Component{

    constructor(props){
        super(props)
        this.showInfo=this.showInfo.bind(this)
        this.state={
            visibility:false
        }
    }
    showInfo(){
        this.setState(prevState=>{
            return(
                {
                    visibility:!prevState.visibility
                }
            )


        })
       
    }


    render(){
        return(
            <div>
             <h1>Visibility toggle</h1>
             <button onClick={this.showInfo}>{this.state.visibility? 'hide info':'show info'}</button>
             {
                 this.state.visibility && (
                     <div>
                        <p>Some secret</p>
                     </div>
                 )
             }
            </div>
        )
    }


}











// let visibility=false
// const showInfo=()=>{
//         visibility=!visibility
//         render();
//     }
// const render=()=>{
//     var template=(
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={showInfo}>{visibility ? 'Hide details':'Show details'}</button>
//             {visibility && (
//                 <div>
//                     <p>You can see the details!</p>
//                 </div>
//             )}
//         </div>

       
       
//     )
//     var appRoot=document.getElementById('app')
//     ReactDOM.render(template,appRoot)
// }

// render();


ReactDOM.render(<Visibility/>,document.getElementById('app'))