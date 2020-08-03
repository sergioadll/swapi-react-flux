import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-0">
			<h2 className="text-white">Characters</h2>
			<div className="card-group scrollx">
				{store.people.map((element, index) => {
					//console.log(index);
					//detalles variable a la que se asigna la estructura html de los detalles del personaje
					const peopleDetails = [
						{ field: "Gender: ", data: element.gender },
						{ field: "Eye Color: ", data: element.eye_color },
						{ field: "Hair Color: ", data: element.hair_color }
					];
					//console.log("details", details);
					return (
						<Link key={index} to={"/singlecharacter/" + (index + 1)}>
							<Card key={index} name={element.name} details={peopleDetails} />
						</Link>
					);
				})}
			</div>
			<h2 className="text-white">Planets</h2>
			<div className="card-group scrollx">
				{store.planets.map((element, index) => {
					const planetDetails = [
						{ field: "Climate: ", data: element.climate },
						{ field: "Terrain: ", data: element.terrain },
						{ field: "Diameter: ", data: element.diameter }
					];
					//console.log("map planet", planetDetails);
					return (
						<Link key={index} to={"/singleplanet/" + (index + 1)}>
							<Card key={index} name={element.name} details={planetDetails} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};
/** */
