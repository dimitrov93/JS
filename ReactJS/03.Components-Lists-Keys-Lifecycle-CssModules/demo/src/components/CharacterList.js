import { useEffect, useState } from "react"

export const CharacterList = () => {
    const [chars, setChars] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people')
        .then(res => res.json())
        .then(result => {
            setChars(result.results)
        });
    },[])


    return (
        <ul>
            {!chars.length && <li>Loading...</li>}
            {chars.map(x => (
                <li key={x.name + x.height}>{x.name}</li>
            ))}
        </ul>
    )
}