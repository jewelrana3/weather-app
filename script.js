const submit = document.getElementById('submit');
submit.addEventListener('click', function () {
	const input = document.getElementById('input').value;
	console.log(input)

	fetch('https://api.openweathermap.org/data/2.5/weather?q='+input +'&appid=afaf1177005576508c30566b5b5ae1e2')
		.then(res => res.json())
		.then(res => {
			console.log(res)
			const cityName = res.name;
			const tem = res.main.temp;
			const temp = tem - 273.15;
			const min = res.main.temp_max;
			const max = res.main.temp_min;
			const cloud_pct = res.coord.lat;
			const feels_likes = res.main.feels_like;
			const humidity = res.weather[0].description;
			const sunset = res.sys.parseFloat(sunset);
			let sunrise = new Date(res.sys.sunset * 1000).toLocaleTimeString();;
			const wind_degree = res.wind.deg;


			document.getElementById('temp').innerText=temp.toFixed(2);
			document.getElementById('city').innerText=cityName;
			document.getElementById('max').innerText=max;
			document.getElementById('min').innerText=min;

			document.getElementById('cloud_pct').innerText=cloud_pct;
			document.getElementById('feels_likes').innerText=feels_likes;
			document.getElementById('humidity').innerText=humidity;

			document.getElementById('sunset').innerText=sunset;
			document.getElementById('sunrise').innerText=sunrise;
			document.getElementById('wind_degree').innerText=wind_degree;

		})
		.catch(err => alert('Please Right City Name'))
	
})


























// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1c4ae62e57msheb7c25bdc7a814dp159285jsnc0c88abb6913',
// 		'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
// 	}
// };

// fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi',options)

// .then(res => res.json())
//  .then(res => console.log(res))
//   .catch(err => console.log(err));





