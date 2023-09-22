


//console.log(rootElement)

//let htmlContent = "<h2>Hello world, my name is Reka</h2>"

/*rootElement.insertAdjacentHTML("beforeend", htmlContent)

//let counter = 0; 

/*while (counter < 10) {
    rootElement.insertAdjacentHTML("beforeend", htmlContent);
    counter = counter +1;
} */

/*for (let counter = 1; counter <= 10; counter++) {
    rootElement.insertAdjacentHTML("beforeend", htmlContent) 
}

let array= ["alma", "körte", "vegyes", "birs","vegyes", "szilva",'eper']

for (let index = 0; index < array.length; index++) {
    rootElement.insertAdjacentHTML("beforeend", `<h2> ${array[index]} </h2>`) */  
//} 

console.log("loaded");
let rootElement = document.querySelector("#root");

fetch("https://restcountries.com/v3.1/all")
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    for (let index = 0; index < data.length; index ++){
        let countryName = data[index].name.common;
        let countryPop = data[index].population;
        let countryArea = data[index].area;
        
        rootElement.insertAdjacentHTML("beforeend", `
        <div class = "country">
            <h2> ${countryName} </h2>
            <p> population: ${countryPop} </p>
            <p> area: ${countryArea}km2 </p>
            </div>
        `)
    }
})