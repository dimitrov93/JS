import {useState} from "react";

export const Clicker = (props) => {

    const [clicks, setClicks] = useState(0);

    const clickHandler = (e) => {
        setClicks(oldClicks => oldClicks + 1)
    }

    const dangerClicks = clicks > 20;

    if (clicks > 30) {
        return <h1>Finished Clicks</h1>
    }

    return (
        <div>
            {dangerClicks && <h1>Danger Clicks</h1>}
            {clicks > 10 
            ?   <h2>Medium clicks</h2>
            : <h3>Normal clicks</h3>
            }
            <button onClick={clickHandler}>{clicks}</button>
        </div>
    )
}