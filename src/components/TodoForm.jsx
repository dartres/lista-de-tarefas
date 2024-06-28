import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState ("");
    const [category,setCategory] = useState ("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value || !category) return;
        addTodo(value, category)
        setCategory("");
        setValue("");
        console.log(value,category);
    }

  return (
    <div className='todo-form'>
      <h2>Criar tarefa:</h2>
      <form onSubmit={handleSubmit}>
        <input type='text'
        value={value} 
        placeholder='Digite o título:' 
        onChange={(e) => setValue(e.target.value)}></input>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="">Selecione Uma Categoria</option>
            <option value="Trabalho">Trabalho</option>
            <option value="Escola">Escola</option>
            <option value="Pessoal">Pessoal</option>
            <option value="Musica">Musica</option>
        </select>
        <button type='submit'>Criar Tarefa</button>
      </form>
    </div>
  )
}

export default TodoForm
