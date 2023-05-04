import { ReactNode } from "react"
import { useCounter, useCounterText } from "../context/CounterContext"

type ChildrenType = {
  children: (num: number) => ReactNode
}

const Counter = ({children}: ChildrenType) => {
  // const [count, setCount] = useState<number>(1)
  const { count, increment, decrement } = useCounter()
  const { text, handleTextInput } = useCounterText()
 
  return (
    <>
        <h1>{children(count)}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <input type="text" onChange={handleTextInput} />     <h2>{text}</h2>
    </>
  )
}

export default Counter