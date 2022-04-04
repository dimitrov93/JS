async function attachEvents() {

    const symbols = {
        'Partly sunny': '⛅',
        Sunny: '☀',
        Overcast: '☁',
        Rain: '☂',
        Degrees: '°',
    };


    let currentLabel = document.getElementById('current');
    let upcomingLabel = document.getElementById('upcoming');

    let url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let resp = await fetch(url);
    let data = await resp.json();
    let button = document.getElementById('submit');
    let forecast = document.getElementById('forecast');


    button.addEventListener('click', () => {
        // currentLabel.innerHTML = '';
        // upcomingLabel.innerHTML = '';
        let location = document.getElementById('location').value;

        if (location) {
            let find = data.find(x => x.name == location)

        forecast.style.display = 'block';

        const url2 = `http://localhost:3030/jsonstore/forecaster/today/${find.code}`;
        fetch(url2)
        .then(res => res.json())
        .then(data => {
            let div = document.createElement('div');
            div.setAttribute('class','forecasts');

            let span = document.createElement('span');
            span.setAttribute('class','condition symbol');
            span.textContent = symbols[data.forecast.condition];
            div.appendChild(span);

            let span1 = document.createElement('span');
            span1.setAttribute('class','condition');

            let spanName = document.createElement('span');
            spanName.setAttribute('class','forecast-data');
            spanName.textContent = data.name;
            span1.appendChild(spanName);

            let spanGrade = document.createElement('span');
            spanGrade.setAttribute('class','forecast-data');
            spanGrade.textContent = `${data.forecast.low}°/${data.forecast.high}°`;
            span1.appendChild(spanGrade);

            let spanWeather = document.createElement('span');
            spanWeather.setAttribute('class','forecast-data');
            spanWeather.textContent = `${data.forecast.condition}`;
            span1.appendChild(spanWeather);

            div.appendChild(span1)
            currentLabel.appendChild(div);

        })
        .catch(err => (forecast.textContent = 'Error'))

        const url3 = `http://localhost:3030/jsonstore/forecaster/upcoming/${find.code}`;
        fetch(url3)
        .then(res => res.json())
        .then(data => {
            let div = document.createElement('div');
            div.setAttribute('class', 'forecast-info');

            data.forecast.forEach(x => {
                let span = document.createElement('span');
                span.setAttribute('class','upcoming');

                let span1 = document.createElement('span');
                span1.setAttribute('class','symbol');
                span1.textContent = symbols[x.condition];
                span.appendChild(span1);

                let span2 = document.createElement('span');
                span2.setAttribute('class','forecast-data');
                span2.textContent = `${x.low}°/${x.high}°`;
                span.appendChild(span2);

                let span3 = document.createElement('span');
                span3.setAttribute('class','forecast-data');
                span3.textContent = `${x.condition}`;
                span.appendChild(span3);


                div.appendChild(span);
            });
            upcomingLabel.appendChild(div)
        })
        .catch(err => (forecast.textContent = 'Error'))
}
        

        
    })
    

}

attachEvents();