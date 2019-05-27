import React, { Component } from 'react';
import { getAllTodos, finishTodo, getTodos, deleteTodo, updateTodo, createTodo} from './todoFunc';
import AddTodo from './addTodo';


class ListTodo extends Component {

    constructor(){
        super();
        this.state = { 
            todos: [],
            add: false,
            edit: false, 
            id: '',
            name: '',
            description: '',
            priority: 'high',
            category: 'General'
        }

        this.showAdd = this.showAdd.bind(this);
    }

    showAdd = () => {
        this.setState({
            add: true
        })
    }

    hideAdd = (status) => {
        this.setState({
            add: status
        })
    }

    hideEdit = (status) => {
        this.setState({
            edit: status
        })
    }

    addTodo = (todo) => {
        createTodo(todo).then(() => {
            this.getAll();
        });

    }
    componentDidMount(){
        this.getAll();
    }

    getAll = () => {
        getAllTodos().then((data) => {
            this.setState({
                todos: [...data]
            })
        })
    }

    ShowupdateTodo = (id, todo) => {
        //console.log(todo);
        this.setState({
            edit: true,
            name: todo.name,
            description: todo.description,
            category: todo.category,
            id: id,
        })
 
    }

    deleteTodo = (id) => {
        deleteTodo(id).then(() => {
            this.getAll();
        })
    }

    sendTodo = () => {
        return this.state.id;
    }
    
    saveChanges = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    submitedForm = (e) => {
        e.preventDefault();
        console.log(this.state);
        updateTodo({
            name: this.state.name,
            description: this.state.description,
            priority: this.state.priority,
            category: this.state.category
        }, this.state.id).then(()=> {
            this.getAll();
        })
        this.setState({
            name: '', 
            description: '',
            status: false,
            priority: 'high',
            category: 'General',
            edit: false
        })
    }
    finishTodo = (id) => {
        //console.log(id)
        finishTodo(id).then(() => {
            this.getAll();
        })

    }
    

    render() {
        const todoList = this.state.todos.map ((todo, index) => {
            return (
                todo.status ? (
                    <div className = 'list-group-item align-item-start border mb-5' key={index}>
                        <del><h1 className = 'mb-2 border-bottom text-muted'>{ todo.name }</h1></del>
                        <button type="button" className="btn btn-light" onClick = { () => this.deleteTodo(todo._id) }>Remove</button>
                    </div>
                ) : (
                    <div className = 'list-group-item align-item-start border mb-5' key={index}>
                    <h1 className = 'mb-2 border-bottom text-muted'>{ todo.name }</h1>
                    <div className='row'>
                    <small className = 'float-right ml-2'>Priority: { todo.priority }</small>
                    <small className = 'float-left ml-3'>Category: { todo.category }</small>
                    </div>
                    <div className = 'text-muted text-center mb-2 '>{ todo.description }</div>
                    <button type="button" className="btn btn-success mr-4" onClick = { () => { this.finishTodo(todo._id) } }><i className="material-icons">check</i></button>
                    <button type="button" className="btn btn-light" onClick = { () => this.ShowupdateTodo(todo._id, todo) }>Update</button>
                    <button type="button" className="btn btn-light" onClick = { () => this.deleteTodo(todo._id) }>Remove</button>
                </div>
                )
                
            )
        })
        return(
            this.state.edit ? (
                <div className = 'container border border-dark rounded-left rounded-right col-md-6 '>
                <div className = 'row mb-4 border-bottom border-dark'>
                    <AddTodo showAdd = { this.state.add } hideAdd = { this.hideAdd } addTodo = { this.addTodo }/>
                </div>
                <div className = 'display-3 text-muted text-center border-bottom'>ToDoS <button onClick= {this.showAdd.bind(this)} className = 'btn btn-light btn-lg text-muted'>Add new todo</button></div>
                <div className = 'list-group'>
                    { todoList }
                </div>
                <div className = 'row mt-4 border-top border-dark'>
                <div className = 'container border rounded-left rounded-right mb-4 edit-container'>
                        <form className = 'form' onSubmit={ this.submitedForm }>
                        <div className = ' text-muted text-center mb-4 border-bottom'><i className ="material-icons mt-1 btn btn-light" onClick = { () => { this.setState({ edit: false }) } }>close</i>Editing...<button type='submit' className ='btn btn-light ml-5'><i className="material-icons">check</i></button></div>
                            <div className = 'form-row'>
                                <div className = 'form-group col-md-6'>
                                    <input type="text" className="form-control" placeholder="Task name" onChange={this.saveChanges} id = 'name' value = {this.state.name}/>
                                </div>
                                <div className = 'form-group col-md-6'>
                                    <textarea type="text" className="form-control" placeholder="Describe task" rows ="2" onChange={this.saveChanges} id = 'description' value = {this.state.description}></textarea>
                                </div>
                            </div>
                            <div className = 'form-row'>
                                <div className = 'form-group col-md-6'>
                                    <label className = 'text-muted'>Priority</label>
                                    <select className="form-control"
                                    defaultValue={ this.state.priority } 
                                    onChange={ this.saveChanges } >
                                        <option value= 'high'>High</option>
                                        <option value= 'medium'>Medium</option>
                                        <option value= 'low'>Low</option>
                                    </select>
                                </div>
                                <div className = 'form-group col-md-6'>
                                    <label className = 'text-muted'>Category</label>
                                    <input type="text" className="form-control" placeholder="Category" name = 'category' id = 'category' onChange={this.saveChanges} value = {this.state.category}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            ) : (
                <div className = 'container border border-dark rounded-left rounded-right col-md-6 '>
                <div className = 'row mb-4 border-bottom border-dark'>
                    <AddTodo showAdd = { this.state.add } hideAdd = { this.hideAdd } addTodo = { this.addTodo }/>
                </div>
                <div className = 'display-3 text-muted text-center border-bottom'>ToDoS <button onClick= {this.showAdd.bind(this)} className = 'btn btn-light btn-lg text-muted'>Add new todo</button></div>
                <div className = 'list-group'>
                    { todoList }
                </div>
                <div className = 'row mt-4 border-top border-dark'>
                </div>
            </div>
            )
            

        );
    }

}

export default ListTodo;