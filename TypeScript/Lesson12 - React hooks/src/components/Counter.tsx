import { ReactNode, useState, useReducer, ChangeEvent } from "react"

type ChildrenType = {
  children: (num: number) => ReactNode
}

const initState = { count: 0, text: '' }

const enum REDUCER_ACTION_TYPE {
  INCREAMENT,
  DECREMENT,
  NEW_INPUT
}


type ReducerAction = {
  type: REDUCER_ACTION_TYPE
  payload?: string
}

const reducer = (state: typeof initState, action: ReducerAction): typeof initState => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREAMENT: return {... state, count: state.count + 1}
    case REDUCER_ACTION_TYPE.DECREMENT: return {... state, count: state.count - 1}
    case REDUCER_ACTION_TYPE.NEW_INPUT: return {... state, text: action.payload ?? ''} // if null
    default: throw new Error();
  }
}

const Counter = ({children}: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  const [state, dispatch] = useReducer(reducer, initState)

  const increment = () => dispatch({type: REDUCER_ACTION_TYPE.INCREAMENT})
  const decrement = () => dispatch({type: REDUCER_ACTION_TYPE.DECREMENT})
  const handleTextInput = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({type: REDUCER_ACTION_TYPE.NEW_INPUT, payload: e.target.value})
  }

  return (
    <>
        <h1>{children(state.count)}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />     <h2>{state.text}</h2>
    </>
  )
}

export default Counter