
class IndecisionApp extends React.Component{
   
    render(){
        const title="Indecision App by";
        const subtitle ="Probability application";
        const options=['one','two','three']
        return(
            <div>
                <Header title={title} subtitle={subtitle}/>
                <Action/>
                <Options options={options}/>
                <AddOption/>
            </div>
            
        )
    }
}

class Header extends React.Component{
    render(){
        return (
            <div>
                <h1> {this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
             </div>)
    }
    }
   

class Action extends React.Component{
     handlePick(){
        alert ('pick option')
    }
    render(){
        return (
            <div>
                <button onClick={this.handlePick}>What should I do?</button>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(props){
        super(props);
        this.handleRemoveAll=this.handleRemoveAll.bind(this)
    }
    handleRemoveAll(){
        alert('Option changed')
    }
    render(){
        return(
            <div>
                {this.props.options.map(option=>{
                    return <Option key={option} optionText={option}/>
                })}
                <button onClick={this.handlseRemoveAll}>Remove all</button>
                <p>Option component here</p>
                <Option/>
            </div>
            
        )
    }
}

class Option extends React.Component{
    render(){
        return(
            <div>
                <p>Option:{this.props.optionText}</p>
            </div>
        )
    }
}

class AddOption extends React.Component{

        handleAddOption(e){
            e.preventDefault();
            const option=e.target.elements.option.value.trim()
            if(option){
                alert (option)
            }

        }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleAddOption}>
                        <input  type='text' name='option'/>
                        <button>Add option</button>
                    </form>
                </div>
            )
        }

}


ReactDOM.render(<IndecisionApp/>,document.getElementById('app'))