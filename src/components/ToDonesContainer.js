import React from 'react'

export default class ToDonesContainer extends React.Component {
    //for functional components:
    //destructuring in the func dec:
    //destr. others ---> ({toDones , extra1,extra2})
    render(){
    return (
        <div className="todones-container">
            <h3>TO DONES</h3>
            {this.props.toDones.map(todone=>{
                return(
                    <div className="todones-item" key={todone.id}>
                        <p>{todone.text}</p>
                        <div className="actions">
                            <button className="btn" onClick={()=>this.props.updateItem(todone.id)}>&#8635;</button>
                            
                            <button className="btn" onClick={()=>this.props.deleteItem(todone.id)}>	&#128465;</button>


                        </div>
                    </div>
                )
            })}
        </div>
    )}
}
