import React, { useState, useReducer } from 'react'

const reducer = (state, active) => {
    switch (active.type) {
        case 'add':
            return [
                ...state, {
                    id: Date.now(),
                    text: active.text,
                    completed: false
                }
            ]

        case 'toggle':
            return state.map((todo) =>
                todo.id === active.id ? {
                    ...todo,
                    completed: !todo.completed
                } : todo
            )

        case 'delete':
            return state.filter((todo) => todo.id !== active.id)

        default:
            return state
    }
}




const TodoList = () => {

    const [todos, dispatch] = useReducer(reducer, [])
    const [text, setText] = useState('')

    const handleAdd = () => {
        if (!text.trim()) return

        dispatch({ type: 'add', text })
        setText('')
    }

    return (
        <div>
            <h2>TodoList</h2>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleAdd()
                }}
                placeholder='할일추가' />
            <button onClick={handleAdd}>추가</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <div onClick={() => dispatch({
                            type:'toggle',
                            id:todo.id
                            })}
                            className={todo.completed? 'completed':''}
                            >
                        {todo.text}
                        </div>
                        <button onClick={() => dispatch({
                            type:'delete',
                            id:todo.id})}>삭제</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList