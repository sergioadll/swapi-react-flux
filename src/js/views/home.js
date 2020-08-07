import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { Card } from "../component/card";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [indexTopPeople, setIndexTopPeople] = useState(4);
	const indexBottomPeople = indexTopPeople - 4;
	const [indexTopPlanets, setIndexTopPlanets] = useState(4);
	const indexBottomPlanets = indexTopPlanets - 4;

	return (
		<div className="p-0 bg-dark">
			<h2 className="text-white pl-4">Characters</h2>
			<div className="card-group scrollx mx-4">
				<Button
					href=""
					className="paginationButton m-1 bg-dark"
					onClick={() => {
						setIndexTopPeople(indexTopPeople - 5);
					}}>
					Previous
				</Button>
				{store.people.map((element, index) => {
					//console.log(indexBottom, index, indexTop);
					//peopledetails variable a la que se asigna la estructura html de los detalles del personaje

					if (index <= indexTopPeople && index >= indexBottomPeople) {
						const peopleDetails = [
							{ field: "Gender: ", data: element.gender },
							{ field: "Eye Color: ", data: element.eye_color },
							{ field: "Hair Color: ", data: element.hair_color }
						];
						const peopleUrl = "/singlecharacter/" + (index + 1);

						return <Card key={index} url={peopleUrl} name={element.name} details={peopleDetails} />;
					}
				})}
				<Button
					href=""
					className="paginationButton m-1 bg-dark"
					onClick={() => {
						setIndexTopPeople(indexTopPeople + 5);
					}}>
					Next
				</Button>
			</div>

			<h2 className="text-white  pl-4">Planets</h2>
			<div className="card-group scrollx mx-4">
				<Button
					href=""
					className="paginationButton m-1 bg-dark"
					onClick={() => {
						setIndexTopPlanets(indexTopPlanets - 5);
					}}>
					Previous
				</Button>

				{store.planets.map((element, index) => {
					if (index <= indexTopPlanets && index >= indexBottomPlanets) {
						const planetDetails = [
							{ field: "Climate: ", data: element.climate },
							{ field: "Population: ", data: element.population },
							{ field: "Diameter: ", data: element.diameter }
						];
						const planetUrl = "/singleplanet/" + (index + 1);
						//console.log("url planet", planetUrl);
						return <Card key={index} url={planetUrl} name={element.name} details={planetDetails} />;
					}
				})}
				<Button
					href=""
					className="paginationButton m-1 bg-dark"
					onClick={() => {
						setIndexTopPlanets(indexTopPlanets + 5);
					}}>
					Next
				</Button>
			</div>
		</div>
	);
};
/** */
