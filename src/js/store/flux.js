const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacters: async () => {
				const store = getStore();
				const requestResponse = await fetch("https://www.swapi.tech/api/people/");
				if (requestResponse.status == "200") {
					const requestData = await requestResponse.json();

					let charactersInfo = [];
					requestData.results.forEach(person => {
						fetch(person.url)
							.then(responsePerson => responsePerson.json())
							.then(personData => {
								charactersInfo.push(personData.result.properties);

								setStore({ ...store, characters: charactersInfo });
							})
							.catch(error => console.log("Error: ", error));
					});

					console.log("Characters object", store.characters);
				} else console.log("Error request: ", requestResponse.status);
			},
			getPlanets: async () => {
				const store = getStore();
				const requestResp = await fetch("https://www.swapi.tech/api/planets/");
				if (requestResp.status == "200") {
					const reqDataPlanets = await requestResp.json();

					let planetsInfo = [];
					reqDataPlanets.results.forEach(planet => {
						fetch(planet.url)
							.then(responsePlanet => responsePlanet.json())
							.then(planetData => {
								planetsInfo.push(planetData.result.properties);
								setStore({ ...store, planets: planetsInfo });
							});
					});

					console.log("Planets object", store.planets);
				} else console.log("Error requestPlanets", requestResp.status);
			},
			addFavorite: name => {
				const store = getStore();

				if (store.favorites.includes(name)) {
				} else {
					setStore({ ...store, favorites: [...store.favorites, name] });
				}
			},
			deleteFavorite: name => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(item => {
					return item != name;
				});
				setStore({ ...store, favorites: updateFavorites });
			}
		}
	};
};

export default getState;
