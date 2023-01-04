const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b7dc1f9948mshb256fb7cb8453a5p1ed5ecjsn2b682d5fa3ab',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

let Kolkata={};
let Madras={};
let Chennai={};
let Seattle={};
let Boston={};
let Nagpur={};

const getWeather=(city)=>{
	cityName.innerHTML=city;
	
	fetch(`https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${city}`, options)
		.then(response => response.json())
		.then(response => {
			if(city=="Kolkata"||city=="kolkata"){
				Kolkata=response;
				Kolplace();
			}
			if(city=="Madras"||city=="madras"){
				Madras=response;
				Madplace();
			}
			if(city=="Chennai"||city=="chennai"){
				Chennai=response;
				Cheplace();
			}
			if(city=="Seattle"||city=="seattle"){
				Seattle=response;
				Seaplace();
			}
			if(city=="nagpur"||city=="Nagpur"){
				Nagpur=response;
				Nagplace();
			}
			if(city=="Boston"||city=="boston"){
				Boston=response;
				Bosplace();
			}
			// console.log(response)
			// console.log(city)
			// console.log(Kolkata)
			cloud_pct.innerHTML=response.cloud_pct
			feels_like.innerHTML=response.feels_like
			humidity.innerHTML=response.humidity
			humidity2.innerHTML=response.humidity
			max_temp.innerHTML=response.max_temp
			min_temp.innerHTML=response.min_temp
			sunrise.innerHTML=response.sunrise
			sunset.innerHTML=response.sunset
			temp.innerHTML=response.temp
			temp2.innerHTML=response.temp
			wind_speed.innerHTML=response.wind_speed
			wind_speed2.innerHTML=response.wind_speed
		
		})
		.catch(err => console.error(err));
}

const Kolplace=()=>{
	Kolfeels.innerHTML=Kolkata.feels_like;
	Kolcloud.innerHTML=Kolkata.cloud_pct;
	Kolhumidity.innerHTML=Kolkata.humidity;
	Kolmax.innerHTML=Kolkata.max_temp;
	Kolmin.innerHTML=Kolkata.min_temp;
	Kolsunrise.innerHTML=Kolkata.sunrise;
	Kolsunset.innerHTML=Kolkata.sunset;
	Koltemp.innerHTML=Kolkata.temp;
	Koldegrees.innerHTML=Kolkata.wind_degrees;
	Kolspeed.innerHTML=Kolkata.wind_speed;
}

const Madplace=()=>{
	Madfeels.innerHTML=Madras.feels_like;
	Madcloud.innerHTML=Madras.cloud_pct;
	Madhumidity.innerHTML=Madras.humidity;
	Madmax.innerHTML=Madras.max_temp;
	Madmin.innerHTML=Madras.min_temp;
	Madsunrise.innerHTML=Madras.sunrise;
	Madsunset.innerHTML=Madras.sunset;
	Madtemp.innerHTML=Madras.temp;
	Maddegrees.innerHTML=Madras.wind_degrees;
	Madspeed.innerHTML=Madras.wind_speed;
}

const Cheplace=()=>{
	Chefeels.innerHTML=Chennai.feels_like;
	Checloud.innerHTML=Chennai.cloud_pct;
	Chehumidity.innerHTML=Chennai.humidity;
	Chemax.innerHTML=Chennai.max_temp;
	Chemin.innerHTML=Chennai.min_temp;
	Chesunrise.innerHTML=Chennai.sunrise;
	Chesunset.innerHTML=Chennai.sunset;
	Chetemp.innerHTML=Chennai.temp;
	Chedegrees.innerHTML=Chennai.wind_degrees;
	Chespeed.innerHTML=Chennai.wind_speed;
}

const Seaplace=()=>{
	Seafeels.innerHTML=Seattle.feels_like;
	Seacloud.innerHTML=Seattle.cloud_pct;
	Seahumidity.innerHTML=Seattle.humidity;
	Seamax.innerHTML=Seattle.max_temp;
	Seamin.innerHTML=Seattle.min_temp;
	Seasunrise.innerHTML=Seattle.sunrise;
	Seasunset.innerHTML=Seattle.sunset;
	Seatemp.innerHTML=Seattle.temp;
	Seadegrees.innerHTML=Seattle.wind_degrees;
	Seaspeed.innerHTML=Seattle.wind_speed;
}

const Nagplace=()=>{
	Nagfeels.innerHTML=Nagpur.feels_like;
	Nagcloud.innerHTML=Nagpur.cloud_pct;
	Naghumidity.innerHTML=Nagpur.humidity;
	Nagmax.innerHTML=Nagpur.max_temp;
	Nagmin.innerHTML=Nagpur.min_temp;
	Nagsunrise.innerHTML=Nagpur.sunrise;
	Nagsunset.innerHTML=Nagpur.sunset;
	Nagtemp.innerHTML=Nagpur.temp;
	Nagdegrees.innerHTML=Nagpur.wind_degrees;
	Nagspeed.innerHTML=Nagpur.wind_speed;
}

const Bosplace=()=>{
	Bosfeels.innerHTML=Boston.feels_like;
	Boscloud.innerHTML=Boston.cloud_pct;
	Boshumidity.innerHTML=Boston.humidity;
	Bosmax.innerHTML=Boston.max_temp;
	Bosmin.innerHTML=Boston.min_temp;
	Bossunrise.innerHTML=Boston.sunrise;
	Bossunset.innerHTML=Boston.sunset;
	Bostemp.innerHTML=Boston.temp;
	Bosdegrees.innerHTML=Boston.wind_degrees;
	Bosspeed.innerHTML=Boston.wind_speed;
}

getWeather("Seattle");
getWeather("Boston")
getWeather("Kolkata")
getWeather("Nagpur");
getWeather("Chennai")
getWeather("Madras")

setTimeout(()=>{
	getWeather("Delhi")
},1500)
// console.log(Kolkata)


document.getElementById("search").addEventListener("click",(e)=>{
	// CIty is input id and search is button id;
	e.preventDefault();
	// console.log(city.value);
	if(city.value!=""){
		getWeather(city.value);

	}

})


// document.getElementById("quicksearch").addEventListener("change",(e)=>{
// 	console.log(e.value)
// })

document.getElementById("Jamshedpur").addEventListener("click",(e)=>{
	getWeather(e.target.value)
})

document.getElementById("Bangalore").addEventListener("click",(e)=>{
	getWeather(e.target.value)
})

document.getElementById("Delhi").addEventListener("click",(e)=>{
	getWeather(e.target.value)
})