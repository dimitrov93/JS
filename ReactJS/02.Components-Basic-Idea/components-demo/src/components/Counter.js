import {useState} from "react";

export const Counter = (props) => {
    const [count, setCount] = useState(props.start || 0);
    const [direction, setDirection] = useState('none');

    const increaseHandler = () => {
        setCount(oldCount => oldCount + 1);
        setDirection('Increment')
    };

    const decreaseHandler = () => {
        setCount(oldCount => oldCount - 1);
        setDirection('Decrease')
    };

    const clearHandler = () => {
        setCount(0);
    };

    let countTitle = '';

    if (count < 1) {
        countTitle = 'Counter'
    } else if (count < 20) {
        countTitle = 'Turbo Counter'
    } else if (count < 30) {
    countTitle = 'MegaCounter'
    } else {
        countTitle = 'Counter'
    }
    
    return (
        <div>
            <h1 style={{fontSize: 16 + count + 'px'}}>{direction} {countTitle}</h1>
            <h2>{count}</h2>
            <button onClick={increaseHandler}>+</button>
            <button onClick={decreaseHandler}>-</button>
            <button onClick={clearHandler}>Clear</button>
        </div>
    );
}