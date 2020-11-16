import React from 'react'

export default class ToDosContainer extends React.Component {
    state={
        userInput:""
    }
    addData=(e)=>{
        e.preventDefault();
        this.props.addItem(this.state.userInput)

    }
    
    render(){
    return (
        <div className="todos-container">

            <form onSubmit={this.addData} className="todo-form">
                <label className="input-item">
                    <input type="text" name="todo" onChange={(e)=>this.setState({userInput:e.target.value})}/>
                </label>
                <input className="btn" type="submit" value="ADD"/>
            </form>

            <div className="todos">
                <h3>TO DO</h3>
                {this.props.toDos.map(todo=>{
                    return(
                        <div className="todo-item" key={todo.id}>
                            <p>{todo.text}</p>
                            <div className="actions">
                                <button className="btn" onClick={()=>{this.props.updateItem(todo.id)}}>
                                    &#10004;
                                </button>
                                <button className="btn" onClick={()=>this.props.deleteItem(todo.id)}>	&#128465;</button>
                            </div>
                        </div>
                    )
                })}

            </div>
        </div>
    )}
}
