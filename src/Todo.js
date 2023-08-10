import React, { useState } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import Nav from './Nav';

function Todo() {
  const [toggle, setToggle] = useState(true);
  const [todos, setTodos] = useState([]);
  const [newTodoText, setNewTodoText] = useState('');
  const [editTodoId, setEditTodoId] = useState(null);
  const [editingText, setEditingText] = useState('');

  const handleToggle = () => {
    setToggle(!toggle);
  };

  const addTodo = () => {
    if (newTodoText.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodoText }]);
      setNewTodoText('');
    }
  };

  const updateTodo = (id, newText) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, text: newText } : todo
    );
    setTodos(updatedTodos);
    setEditTodoId(null);
    setEditingText(''); // Clear the editing text
  };

  const deleteTodo = id => {
    const filteredTodos = todos.filter(todo => todo.id !== id);
    setTodos(filteredTodos);
  };

 return (
    <div className='container-fluid bg-custom '>
      <div className='row'>
        <div className={`col-2 bg-white col overflow-auto ${toggle ? 'd-block' : 'd-none'}`} data-testid='sidebar'>
          <Sidebar />
        </div>
        <div className='col overflow-auto'>
          <Nav Toggle={handleToggle} data-testid='nav' />
          <div className="col-sm-12 col-md-6 container ms-0 mt-5">
            <h1 className="fs-4 mb-4 text-light">Todo List</h1>
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                value={newTodoText}
                onChange={e => setNewTodoText(e.target.value)}
                placeholder="Enter todo..."
              />
              <button className="btn btn-warning" onClick={addTodo}>
                <i className="bi bi-plus fs-5"></i>
              </button>
            </div>
            <ul className="list-group">
              {todos.map(todo => (
                <li className="list-group-item d-flex justify-content-between" key={todo.id}>
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      
                    />
                 
                  {editTodoId === todo.id ? (
                    <div className="d-flex align-items-center">
                      <input
                        type="text"
                        className="form-control me-2"
                        value={editingText}
                        onChange={e => setEditingText(e.target.value)}
                      />
                      <button
                        className="btn btn-success"
                        onClick={() => updateTodo(todo.id, editingText)}
                      >
                        <i className="bi bi-check"></i>
                      </button>
                    </div>
                  ) : (
                    <div>{todo.text}</div>
                  )}
                  </div>
                  <div>
                    <button
                      className="btn btn-secondary me-2"
                      onClick={() => {
                        setEditTodoId(todo.id);
                        setEditingText(todo.text);
                      }}
                    >
                      <i className="bi bi-pencil"></i>
                    </button>
                    <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
                      <i className="bi bi-trash"></i>
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Todo;