async function getInfo() {
    let busId = document.getElementById('stopId').value ;
    let stopName = document.getElementById('stopName');
    let buses = document.getElementById('buses');

    let url = `http://localhost:3030/jsonstore/bus/businfo/${busId}`;

    try {
        let response = await fetch(url);

        if (response.status !== 200) {
            throw new Error(`Stop ID not found!`)
        }

        let data = await response.json();

        stopName.textContent = data.name;

        buses.innerText = ''
        Object.entries(data.buses).forEach(b => {
            let li = document.createElement('li');
            li.textContent = `Bus ${b[0]} arrives in ${b[1]} minutes`
            buses.appendChild(li)
        })

    } catch (error) {
        stopName.textContent = `Error`;

    }

}