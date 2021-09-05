const kelvin = 0; // Forecast for today
var celsius = kelvin - 273; // Converting kelvin to celcius
var fahrenheit = celsius * (9/5) + 32; // Converting celsius to fahrenheit
fahrenheit = Math.floor(fahrenheit); // Rounding fahrenheit value

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)
