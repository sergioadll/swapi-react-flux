const url = "https://swapi.dev/api/";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: []
		},
		actions: {
			// Use getActions to call a function within a function
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadAllData: () => {
				let lastPagePeople = false;
				let lastPagePlanets = false;
				do {
					getActions().loadData("people/");
					const store = getStore();
					console.log(store.people);
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
					if (data == "people/") {
						//console.log(result.results);
						//console.log(result);
						setStore({ people: result });
					} else if (data == "planets/") {
						setStore({ planets: result });
					}
				} catch (error) {
					console.log("error", error);
				}
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
