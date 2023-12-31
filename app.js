const API_KEY = "cf2b73bc5f4707368e42a0146526232b";
const CITY = 'New York';

// let url = `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`;



async function getWeather(){
    try{
        let inp = document.querySelector("input").value;
        
        console.log(inp);
        let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inp}&appid=${API_KEY}`);
        console.log(res);
        let data = await res.json();
        console.log(data);
        return data;
        
    }
    catch(err){
        console.log("erroor",err);
    }

    // let promise = await request.json();
}

let btn = document.querySelector("button");
let p = document.querySelector("p");

btn.addEventListener('click',async()=>{
    let data = await getWeather();
    console.log("Data in butotn",data.main.temp_max);
    let temp = data.main.temp;
    let list = document.querySelector("ul");
    let li1 = document.createElement("li");
    let li2 = document.createElement("li");
    let inp = document.querySelector("input").value;
    let celcius = temp - 273.15;
    let farenheit = (celcius * 9/5) + 32;
    li1.innerText = `The Temperature today of ${inp} city is : ${celcius.toFixed(2)} °C`;
    li2.innerText = `The Temperature today of ${inp} city is : ${celcius.toFixed(2)} °F`;
    list.innerText = "";
    list.appendChild(li1);
    list.appendChild(li2);
    

})

