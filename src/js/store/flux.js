const url = "https://swapi.dev/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: ["Loading People"],
			planets: ["Loading Planets"],
			favorites: []
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadAllData: () => {
				let lastPagePeople = false;
				let lastPagePlanets = false;
				//buscar otra manera de recorrerlo ->for in
				//do while iteraría una vez más de lo necesario

				do {
					getActions().loadData("people/");
					const store = getStore();
					//const next = store.people.next;
					//if (next=null){break}//console.log(store.people);
					//let index++;
					lastPagePeople = true;
				} while (!lastPagePeople);
				do {
					getActions().loadData("planets/");
					lastPagePlanets = true;
				} while (!lastPagePlanets);
			},
			loadData: async data => {
				const fullUrl = url.concat(data);
				var requestOptions = {
					method: "GET",
					redirect: "follow"
				};
				try {
					let res = await fetch(fullUrl, requestOptions);
					let result = await res.json();
					let next = await setStore({});
					if (data == "people/") {
						//console.log(result.results);
						//console.log(result);
						setStore({ people: result.results });
					} else if (data == "planets/") {
						setStore({ planets: result.results });
					}
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

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
