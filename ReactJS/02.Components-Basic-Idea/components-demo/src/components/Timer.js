import React from "react";

export const Timer = (props) => {
    const [time, setTime] = React.useState(0);
    const [minutes, setMinutes] = React.useState(props.start);
    const [hours, setHours] = React.useState(props.start);

    setTimeout(() => {
        if (time < 59) {
             setTime(time + 1)
        } else {
            setTime(0)
            if (minutes < 59) {
            setMinutes(minutes + 1)
            } else {
                setTime(0)
                setMinutes(0)
                setHours(hours + 1)
            }
        }
    }, 1000)

    return (
        <div>
            <h2>{hours} hours : {minutes} min : {time} sec.</h2>
        </div>
    )
}