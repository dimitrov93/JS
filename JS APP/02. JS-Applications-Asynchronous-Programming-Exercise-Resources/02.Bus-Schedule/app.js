function solve() {
    let label = document.querySelector('#info span');
    let departed = document.getElementById('depart');
    let arrived = document.getElementById('arrive');

    let stop = {
        next: 'depot'
    };

    async function depart() {
        let url = `http://localhost:3030/jsonstore/bus/schedule/${stop.next}`
        let res = await fetch(url);

        if (res.status !== 200) {
        label.textContent = `Error`;
        departed.disabled = true;
        arrived.disabled = true;
        }
        stop = await res.json();

        label.textContent = `Next stop ${stop.name}`;
        departed.disabled = true;
        arrived.disabled = false;
    }

    function arrive() {
     
        label.textContent = `Arriving at ${stop.name}`;

        departed.disabled = false;
        arrived.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();