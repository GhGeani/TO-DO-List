import React, { Component } from 'react';

class AddTodo extends Component {

    constructor(){
        super();

        this.state = {
            name: '',
            description: '',
            status: false,
            priority: 'high',
            category: 'General'
        }
        this.hideAdd = this.hideAdd.bind(this);
    }

    hideAdd = () => {
        return false;
    }
    

    saveChanges = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }



    submitedForm = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            name: '', 
            description: '',
            status: false,
            priority: 'high',
            category: 'General'
        })


   
    }
    render(){
        return(
            this.props.showAdd ? 
                <div className = 'container border  rounded-left rounded-right mb-4 add-container'>
                    <form className = 'form' onSubmit={ this.submitedForm }>
                        <div className = 'display-4 text-muted text-center mb-4 border-bottom'><i className ="material-icons mt-1 btn btn-light" onClick = { () => { this.props.hideAdd(false) } }>close</i>Add a new task  <button className='btn btn-light'><i className="material-icons">add</i></button></div>
                        <div className = 'form-row'>
                            <div className = 'form-group col-md-6'>
                                <input type="text" className="form-control" id ='name' placeholder="Task name" onChange={this.saveChanges} value = { this.state.name }/>
                            </div>
                            <div className = 'form-group col-md-6'>
                                <textarea type="text" className="form-control" id='description'  placeholder="Describe task" rows ="3" onChange={this.saveChanges} value = { this.state.description } ></textarea>
                            </div>
                        </div>
                        <div className = 'form-row'>
                            <div className = 'form-group col-md-6'>
                                <label htmlFor= 'priority' className = 'text-muted'>Priority</label>
                                <select id = 'priority' className="form-control"
                                    defaultValue={ this.state.priority } 
                                    onChange={ this.saveChanges } 
                                >
                                    <option value = 'high'>High</option>
                                    <option value = 'medium'>Medium</option>
                                    <option value = 'low'>Low</option>
                                </select>
                            </div>
                            <div className = 'form-group col-md-6'>
                                <label htmlFor= 'category' className = 'text-muted'>Category</label>
                                <input type="text" className="form-control" id ='category' placeholder="Category" onChange={this.saveChanges} value = { this.state.category }/>
                            </div>
                        </div>
                    </form>
            </div>
             : null
            
        );
    }
}

export default AddTodo;