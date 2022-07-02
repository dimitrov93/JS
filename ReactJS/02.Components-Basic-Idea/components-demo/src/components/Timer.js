import React from "react";

export const Timer = (props) => {
    const [time, setTime] = React.useState(0);

    setTimeout(() => {
        if (time < 60) {
             setTime(time + 1)
        } else {
            setTime(0)
        }
    }, 1000)

    return (
        <div>
            <h2>TImer: {time} sec.</h2>
        </div>
    )
}