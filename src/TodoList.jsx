import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import './TodoList.css';

export default function TodoList(){
    let[Todos,setTodos]=useState([{task:"Eat",id:uuidv4(),isDone:false}]);  //used to list the input value when it is added
    let[newTodo,setnewTodo]=useState([""]);  // used to re-render the input values

    let addNewTodo=()=>{
        if(newTodo!=""){
            setTodos((prevTodos)=>{
                return [...prevTodos,{task: newTodo,id:uuidv4(),isDone:false}];
            });
            setnewTodo("");
        }
        else{
            alert("Enter task");
        }
    };

    let newTodoValue=(event)=>{
        setnewTodo(event.target.value);
    }


    //==============================  Delete ============================
    let deleteTodo=(id)=>{
        setTodos(()=>Todos.filter((prevTodos)=>prevTodos.id!=id) );
    }
     

    //=============================  Mark as Done for all items ==============
    let markAsDoneAll=()=>{
        setTodos((prevTodos)=>prevTodos.map((Todo)=>{
            return{
                ...Todo,isDone:true
            }
        })
    )
    }

    //============================== Mark as done for single item =====================
    let markAsDone=(id)=>{
        setTodos((prevTodos)=>prevTodos.map((Todo)=>{
            if(Todo.id==id){
                return{
                    ...Todo,isDone:true,
                }
            }else{
                return Todo;
            }
        })
    )
    }

    // ========================== rendering the componenets ====================================
    return(
        <div>
            <div class="neon-container">
    <h1 class="neon-text">To-do List</h1>
</div>
            <input type="text" className="input" value={newTodo} onChange={newTodoValue}/>
            <button onClick={addNewTodo}>Add</button>
            <ul className="list-container">
                {Todos.map((Todo)=>(
                    <li className="list-item" key={Todo.id}>
                        <span style={Todo.isDone?{textDecoration:"line-through"}:{}}>{Todo.task}</span>
                        <div>
                        <button className="delete-item" onClick={()=>deleteTodo(Todo.id)}><i className="fa-solid fa-delete-left"></i></button>
                        <button className="mark-item"onClick={()=>markAsDone(Todo.id)}><i className="fa-solid fa-check"></i></button>
                        </div>
                    </li>
                ))}
            </ul>
            <button onClick={markAsDoneAll}><i class="fa-solid fa-thumbs-up"></i>  All Done</button>
        </div>
    )
}