async function weather() {
  const weatherPromise = await fetch("https://api.weather.gov/gridpoints/MFL/110,50/forecast")
  const weatherData = await weatherPromise.json()
  const ourTemperature = weatherData.properties.periods[0].temperature

  const temperatureOutput = document.querySelector("#temperature-output");
  temperatureOutput.textContent = ourTemperature
}

weather();

async function petsArea() {
  const petsAreaPromise = await fetch("https://learnwebcode.github.io/bootcamp-pet-data/pets.json");
  const petsData = await petsAreaPromise.json();

  petsData.forEach(pet => {
    console.log(pet.name, pet.species)
  })
}

petsArea();