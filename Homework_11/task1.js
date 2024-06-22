import fetch from "node-fetch";
const getPlanetNames = async () => {
  const planetPromises = [];
  for (let i = 1; i <= 10; i++) {
    planetPromises.push(
      fetch(`https://swapi.dev/api/planets/${i}/`).then((response) =>
        response.json(),
      ),
    );
  }

  const planets = await Promise.allSettled(planetPromises);
  const planetNames = planets.map((planet) => planet.name);

  console.log("Planet Names:", planetNames);
};

getPlanetNames();

const getHanSoloStarships = () => {
  fetch("https://swapi.dev/api/people/14/")
    .then((response) => response.json())
    .then((data) => {
      const starshipPromises = data.starships.map((url) =>
        fetch(url).then((res) => res.json()),
      );
      return Promise.all(starshipPromises);
    })
    .then((starships) => {
      const starshipNames = starships.map((starship) => starship.name);
      console.log("Han Solo Starships:", starshipNames);
    })
    .catch((error) => console.error("Error:", error));
};

getHanSoloStarships();

const getHanSoloStarshipsAsync = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people/14/");
    const data = await response.json();
    const starshipPromises = data.starships.map((url) =>
      fetch(url).then((res) => res.json()),
    );
    const starships = await Promise.all(starshipPromises);
    const starshipNames = starships.map((starship) => starship.name);
    console.log("Han Solo Starships (async/await):", starshipNames);
  } catch (error) {
    console.error("Error", error);
  }
};

getHanSoloStarshipsAsync();

const getResidentsFromReturnOfTheJedi = async () => {
  try {
    const filmResponse = await fetch("https://swapi.dev/api/films/3/");
    const filmData = await filmResponse.json();
    const planetPromises = filmData.planets.map((url) =>
      fetch(url).then((res) => res.json()),
    );
    const planets = await Promise.all(planetPromises);
    const residentsData = await Promise.all(
      planets.map(async (planet) => {
        const residentPromises = planet.residents.map((url) =>
          fetch(url).then((res) => res.json()),
        );
        const residents = await Promise.all(residentPromises);
        const residentNames = residents.map((resident) => resident.name);
        return {
          planetName: planet.name,
          residents: residentNames,
        };
      }),
    );

    console.log("Residents from Return of the Jedi:", residentsData);
  } catch (error) {
    console.error("Error:", error);
  }
};

getResidentsFromReturnOfTheJedi();
