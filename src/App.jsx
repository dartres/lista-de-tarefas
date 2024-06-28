import { useState } from 'react';
import './App.css';
import Todo from './components/Todo';
import Search from './components/Search';
import Filter from './components/Filter';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
  {
      id: 1,
      text: "Reunião de pautas",
      category: "Trabalho",
      isCompleted: false,
  },
  {
    id: 2,
    text: "Estudar para prova de matemática",
    category: "Escola",
    isCompleted: false,
 },
  {
    id: 3,
    text: "Ir para academia",
    category: "Pessoal",
    isCompleted: false, 
  },
  {
    id: 4,
    text: "Estudar arranjos",
    category: "Música",
    isCompleted: false, 
  },

  ])

  const addTodo = (text, category) => {

    const newTodos = [...todos,
      {
      id: Math.floor(Math.random()*10000),
      text,
      category,
      isCompleted: false,
    },
 
];

  setTodos(newTodos); 
  
  };

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo : null);
    setTodos(filteredTodos);
  }


  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }

  const [search,setSearch] = useState("");
  const [filter,setFilter] = useState("All");
  const [sort,setSort] = useState("Asc");

  return (
    <div className='app'>
        <h1>LISTA DE TAREFAS</h1>
        
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} setSort={setSort}/>

        <div className="todolist">
          {todos.filter(
            (todo) => 
          todo.text.toLowerCase().
          includes(search.toLowerCase())
        )
          .filter(
            (todo) => 
            filter ==="All" ? true 
          : filter === "Completed" ? todo.isCompleted 
          : !todo.isCompleted
        )
        .sort((a, b) => sort ==="Asc" 
          ? a.text.localeCompare(b.text) 
          : b.text.localeCompare(a.text)
        )
          .map(
            (todo) =>(
            <Todo key={todo.id} todo = {todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
          )
          )}
        </div>

        <TodoForm addTodo={addTodo} />
      </div>
  )


  
}


export default App
