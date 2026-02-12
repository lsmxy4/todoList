import React from 'react'
import Todoitem from './Todoitem';
import './TodoList.css'
import { useState } from 'react';

const TodoList = ({ todos, onUpdate, onDelete }) => {

    const [search, setSearch] = useState('')
    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if (search === '') {
            return todos
        }
        return todos.filter((todo) =>
            todo.content
                .toLowerCase()
                .includes(search.toLowerCase())
        )
    }

    const filteredTodes = getFilteredData()

    return (
        <div className='TodoList'>
            <h4>Todo List 🌱</h4>
            <input
                type="text"
                value={search}
                onChange={onChangeSearch}
                placeholder='검색어 입력' />
            <div className="todo_wrapper">
                {filteredTodes.map((todo) => (
                    <Todoitem
                        {...todo}
                        key={todo.id}
                        onUpdate={onUpdate}
                        onDlete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
}

export default TodoList