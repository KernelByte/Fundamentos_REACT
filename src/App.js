import logo from './platzi.webp';
import './App.css';
import {TodoCounter} from './TodoCounter'
import {TodoItem} from './TodoItem'
import {TodoList} from './TodoList'
import {TodoSearch} from './TodoSearch'
import {CreateTodoButton} from './CreateTodoButton'


function App() {
  return (
    <div className="App">

    <TodoCounter/>
    <TodoSearch/>
    
    <TodoList>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </TodoList>

    <CreateTodoButton/>

    </div>
  );
}


export default App;
