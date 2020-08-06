import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-0 bg-dark">
			<h2 className="text-white">Characters</h2>
			<div className="card-group scrollx">
				{store.people.map((element, index) => {
					//console.log(index);
					//peopledetails variable a la que se asigna la estructura html de los detalles del personaje
					const peopleDetails = [
						{ field: "Gender: ", data: element.gender },
						{ field: "Eye Color: ", data: element.eye_color },
						{ field: "Hair Color: ", data: element.hair_color }
					];
					const peopleUrl = "/singlecharacter/" + (index + 1);

					return <Card key={index} url={peopleUrl} name={element.name} details={peopleDetails} />;
				})}
			</div>

			<h2 className="text-white">Planets</h2>
			<div className="card-group scrollx">
				{store.planets.map((element, index) => {
					const planetDetails = [
						{ field: "Climate: ", data: element.climate },
						{ field: "Population: ", data: element.population },
						{ field: "Diameter: ", data: element.diameter }
					];
					const planetUrl = "/singleplanet/" + (index + 1);
					//console.log("url planet", planetUrl);
					return <Card key={index} url={planetUrl} name={element.name} details={planetDetails} />;
				})}
			</div>
		</div>
	);
};
/** */
