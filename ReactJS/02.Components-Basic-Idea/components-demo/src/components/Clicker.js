import {useState} from "react";

export const Clicker = (props) => {

    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        console.log(e);

        setClicks(oldClicks => oldClicks + 1)
    }

    return (
        <button onClick={clickHandler}>{clicks}</button>
    )
}