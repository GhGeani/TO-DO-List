import React, { Component } from 'react';
import ListTodo from './components/listTodo';
import ListCategory from './components/listCategory';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/categoriesList.css';
import './styles/todoList.css';
import './styles/App.css';

class App extends Component {
  
  render(){
    return(
     <div className = 'container-fluid'>
       <h1 className = 'display-1 text-muted text-center mb-5 border-bottom'>To do list</h1>
       <div className = 'row'>
        <ListCategory />
         <ListTodo />
       </div>
     </div>
    );
  }
}

export default App;
