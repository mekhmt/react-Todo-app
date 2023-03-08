import React, {Component} from "react";
import './TodoList.css'
class TodoList extends Component{
    constructor(props){
        super(props)
        this.state ={
            data:["Mekh MT"],
            inputData:"",
            message:""
        }
    }
    in_data = (e)=>{
        this.setState({inputData:e.target.value})
    }
    save = ()=>{
        let currentText = this.state.inputData;
        if(currentText.length>0){
            //console.log(currentText)
            let currentItem = this.state.data;
            currentItem.push(currentText)
            console.log(currentItem)
            this.setState({data:currentItem,message:""})

        }else{
            this.setState({message:"you must enter a task"})
        }
    }
    remove = (i)=>{
        let currentAarry = this.state.data
        currentAarry.splice(i,1)
        this.setState({data:currentAarry})
    }
    deleteAll = ()=>{
        this.setState({data:[]})
    }
    render(){
        return(
            <div className="container">
            <div className="form">
                <input type="text" className="input" onChange={this.in_data} />
                <button  className="add" onClick={this.save}>Add Task</button>
            </div>
            <div className="tasks">{this.state.message}</div>
            {this.state.data.map((item,k)=><div className="tasks" key={k}><b className="taskName">{item}</b><span><button className="delete" onClick={()=>{this.remove(k)}}>Delete</button></span></div>)}
            
            <div className="delete-all" onClick={this.deleteAll}>Delete all</div>
            </div>
        )
    }
}
export default TodoList;