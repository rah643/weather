// windows.alert("hello js");
// acc568708cfc5bf8e798384572bb6aa2acc568708cfc5bf8e798384572bb6aa2
//https://api.openweathermap.org/data/2.5/weather?units=metric&q=Lucknow&appid=acc568708cfc5bf8e798384572bb6aa2

async function weather(){
    let city=document.querySelector('#search>input').value;
    console.log(city);
    
    const url="https://api.openweathermap.org/data/2.5/weather?units=metric&q="+city+"&appid=0fde24f18909b27ce870124bbcdf96d5";
    console.log(url)
    const res= (await fetch(url));
    const data=await res.json();
    console.log(data);
    temp.innerHTML=Math.floor(data["main"]["temp"]) +"°C";
    cityname.innerHTML=data.name;
    humid.innerHTML=data.main.humidity+"%";
    wind.innerHTML=data.wind.speed+"KM/H";
    console.log(data.weather[0].main);
    
    // console.log( (data.weather[0].main)==="Clear");
    // const l=document.querySelector("#status").src;
    // console.log(l);
    

    if((data.weather[0].main)==="Mist"){
        
        document.querySelector('#status').src="mist.png";
    }
    else if((data.weather[0].main)==="Clouds"){
        
        document.querySelector('#status').src="clouds.png";

    }
    else if((data.weather[0].main)==="Clear"){
       
        
        document.querySelector('#status').src="clear.png";
       
    }
else if((data.weather[0].main)==="Rain"){
    document.querySelector('#status').src="rain.png";

}
    else if((data.weather[0].main)==="Snow"){
        document.querySelector('status').src="snow.png";

    }
    else if((data.weather[0].main)==="Haze"){
        document.querySelector('#status').src="haze.png";


    }
    else {
        document.querySelector('#status').src="clear.png";

    }

}
