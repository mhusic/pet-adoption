const template = document.querySelector("#pet-card-template");
const wrapper = document.createDocumentFragment();

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
    const clone = template.content.cloneNode(true);

    clone.querySelector("h3").textContent = pet.name;
    clone.querySelector(".pet-description").textContent = pet.description;
    clone.querySelector("img").src = pet.photo;

    wrapper.appendChild(clone)
  })
  const listOfPets = document.querySelector(".list-of-pets");
  listOfPets.appendChild(wrapper);
}

petsArea();