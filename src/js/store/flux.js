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
					//console.log("Request Characters", requestData);
					let charactersInfo = [];
					requestData.results.forEach(person => {
						fetch(person.url)
							.then(responsePerson => responsePerson.json())
							.then(personData => {
								charactersInfo.push(personData.result.properties);
								//setStore({ characters: charactersInfo });
								setStore({ ...store, characters: charactersInfo });
							})
							.catch(error => console.log("Error: ", error));
					});
					//
					//console.log("Characters Info", charactersInfo);
					console.log("Characters object", store.characters);
				} else console.log("Error request: ", requestResponse.status);
			},
			getPlanets: async () => {
				const store = getStore();
				const requestResp = await fetch("https://www.swapi.tech/api/planets/");
				if (requestResp.status == "200") {
					const reqDataPlanets = await requestResp.json();
					//console.log("Request Planets", reqDataPlanets);
					let planetsInfo = [];
					reqDataPlanets.results.forEach(planet => {
						fetch(planet.url)
							.then(responsePlanet => responsePlanet.json())
							.then(planetData => {
								planetsInfo.push(planetData.result.properties);
								setStore({ ...store, planets: planetsInfo });
							});
					});

					//console.log("Planets Info", planetsInfo);
					console.log("Planets object", store.planets);
				} else console.log("Error requestPlanets", requestResp.status);
			},
			addToFavorites: name => {
				const store = getStore();

				if (store.favorites.includes(name)) {
					//console.log("yes", store.favorites);
				} else {
					//1. Accedo a todo lo que hay en store
					//2.Accedo al array favorito
					//3.Accedo a todo lo que hay favoritos y le agrego name
					setStore({ ...store, favorites: [...store.favorites, name] });
				}
				//console.log(store.favorites);
			},
			addToFavoritesPlanets: name => {
				const store = getStore();
				const avoidingrepetition = store.favorites.includes(name);
				store.planets.map(item => {
					if (item.name == name && avoidingrepetition === false) {
						setStore({ ...store, favorites: [...store.favorites, name] });
					}
				});
			},
			deleteFavorite: name => {
				const store = getStore();
				const updateFavorites = store.favorites.filter(item => {
					return item != name;
				});
				setStore({ ...store, favorites: updateFavorites });
				//console.log(updatefavorites);
			}
		}
	};
};

export default getState;
