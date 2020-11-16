
import React from 'react';
import Navigation from './components/Navigation';
import ToDonesContainer from './components/ToDonesContainer';
import ToDosContainer from './components/ToDosContainer';
import "./css/App.scss"
import {BrowserRouter,Route,Switch} from "react-router-dom"
import About from "./components/About"
import NotFound from "./components/NotFound"
import {v4} from 'uuid';
//Components are small User Interface Units.(reuseable)
//State is a buld in object in a component(mutable)
//Props: to pass data from parent to child(components)

// LOCAL STORAGE.
// console.log(localStorage);
// localStorage.setItem("to-do-app","abcd")
// console.log(localStorage.getItem("to-do-app"))//abcd
localStorage.removeItem("to-do-app")

let data={name:"Ali",age:29}
//localstorage yalnizca string kabul eder. o yuzden:
JSON.stringify(data)
localStorage.setItem("to-do-app",JSON.stringify(data))
//for getting the data in its own format:
JSON.parse(localStorage.getItem("to-do-app"))

class App extends React.Component {
state={
  todoItems:[
    ]
}

  componentDidMount(){
    let data=localStorage.getItem("todoapp");
    if(data)
    {let convertedData=JSON.parse(data);
    this.setState({todoItems:convertedData})}
    
  }

  addItem=(value)=>{
    let item={id: v4(), text:value,done:false}
    const copyState=[...this.state.todoItems]
    copyState.push(item)
    // this.setState({todoItems:copyState})
    // localStorage.setItem("todoapp",JSON.stringify(copyState))
    //ustteki ikisini beraber yapmak icin:
    this.setState({todoItems:copyState},()=>localStorage.setItem("todoapp",JSON.stringify(this.state.todoItems)))
  }

  updateItem=(id)=>{
    let updatedItems=this.state.todoItems.map(item=>{
      if(item.id===id){
        item.done=!item.done
        return item}
        else{return item}
    })
    this.setState({todoItems:updatedItems},()=>localStorage.setItem("todoapp",JSON.stringify(this.state.todoItems)))
  }
  deleteItem=(id)=>{
    let itemsNotToDelete=this.state.todoItems.filter(item=>item.id!==id)
    return(
    this.setState({todoItems:itemsNotToDelete},()=>localStorage.setItem("todoapp",JSON.stringify(this.state.todoItems))))
  }

  render(){
    let toDos=this.state.todoItems.filter(item=>!item.done)
    let toDones=this.state.todoItems.filter(item=>item.done)


  return (
    <BrowserRouter>
    <div className="app">
      {/*Components we need
      1)navbar
      2)form with todo items
      3)done items */}
      <Navigation/>

      {/* for using default props+props from us together */}
      {/* <Route exact path="/" render={(props)=><div><ToDosContainer {...props}  toDos={toDos} addItem={this.addItem} updateItem={this.updateItem} deleteItem={this.deleteItem}/></div>}></Route> */}

      {/* for using the props from us: */}
      <Switch>
      <Route exact path="/">
        <ToDosContainer  toDos={toDos} addItem={this.addItem} updateItem={this.updateItem} deleteItem={this.deleteItem}/>
        <ToDonesContainer toDones={toDones} updateItem={this.updateItem} deleteItem={this.deleteItem}/>
      </Route>
      <Route path="/about" component={About}/>
       <Route component={NotFound}/> 
      {/*default case */}
      </Switch>
    </div>
    </BrowserRouter>
  );
}}


export default App;