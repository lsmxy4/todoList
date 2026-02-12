import React, { useReducer } from 'react'

const reducer = (state, active) => {

    switch (active.type) {
        case 'increament':
            return { count: state.count + 1 }
        case 'decreament':
            return { count: state.count - 1 }
        case 'reset':
            return { count: 0 }
        default:
            throw new Error('오류코드')
    }
}

const Counter = () => {
    const initailState = { count: 0 }

    const [state, dispatch] = useReducer(reducer, initailState);

    return (
        <div>
            <p>현제 카운트 : {state.count}</p>
            <button onClick={() => dispatch({ type: 'increament' })}>
                +1
            </button>

            <button onClick={() => dispatch({ type: 'reset' })}>
                초기화
            </button>

            <button onClick={() => dispatch({ type: 'decreament'})}>
                -1
            </button>

        </div>
    )
}

export default Counter