const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			favorites: [],
			nextPeople: "unchanged",
			nextPlanets: "unchanged"
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadAllPeople: async () => {
				//while next!= null
				for (let i = 1; ; i++) {
					let next = getStore().nextPeople;
					if (next === null) {
						break;
					}
					let loadPage = await getActions().loadOnePageOfPeople(i);
				}
			},
			loadOnePageOfPeople: async page => {
				const urlPeople = "https://swapi.dev/api/people/?page=";
				const fullUrlPeople = urlPeople.concat(page);

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(fullUrlPeople, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let people = await result.results;
					let allPeople = getStore().people;
					allPeople = allPeople.concat(people);
					setStore({ nextPeople: result.next });
					setStore({ people: allPeople });
				} catch (error) {
					console.log("error", error);
				}
			},
			loadAllPlanets: async () => {
				for (let i = 1; i < 20; i++) {
					let next = getStore().nextPlanets;
					if (next === null) {
						break;
					}
					let loadPage = await getActions().loadOnePageOfPlanets(i);
				}
			},
			loadOnePageOfPlanets: async page => {
				const urlPlanets = "https://swapi.dev/api/planets/?page=";
				const fullUrlPlanets = urlPlanets.concat(page);

				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(fullUrlPlanets, requestOptions);
					let result = await res.json();
					let active = await setStore({});
					let planets = await result.results;
					let allPlanets = getStore().planets;
					allPlanets = allPlanets.concat(planets);
					setStore({ nextPlanets: result.next });
					setStore({ planets: allPlanets });
				} catch (error) {
					console.log("error", error);
				}
			},

			addFavorite: (name, url) => {
				const oneFavorite = { name: name, url: url };
				const prevFavorites = getStore().favorites;
				const existentFavorite = prevFavorites.filter(prevFavorites => prevFavorites.name === name);
				if (existentFavorite.length == 0) {
					//if the element is not in favorites we add it to the store
					const updateFavorites = prevFavorites.concat(oneFavorite);
					setStore({ favorites: updateFavorites });
				} else {
					//if the element is already in favorites we delete it and update the store
					const newFavorites = prevFavorites.filter(prevFavorites => prevFavorites.name !== name);
					setStore({ favorites: newFavorites });
				}
			},
			removeFavorite: index => {
				const fav = getStore().favorites;
				fav.splice(index, 1);
				//console.log("FLUX: rvFavorites", fav, index);
				setStore({ favorites: fav });
			},

			changeColor: classProperties => {
				const [buttonBaseClass, setButtonBaseClass] = useState("btn btn-dark ml-3");
				classProperties = "btn btn-warning ml-3";
				console.log("FLUX: changeColor class", classProperties);
				return classProperties;
			}
		}
	};
};

export default getState;
