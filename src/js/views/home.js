import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { AllCards } from "../component/AllCards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="p-0">
			<h2 className="text-white">Characters</h2>
			<div className="card-group scrollx">
				{store.people.map((element, index) => {
					//console.log(character.name);
					return (
						<AllCards
							key={index}
							prop1={element.name}
							prop2={element.gender}
							prop3={element.eye_color}
							prop4={element.hair_color}
						/>
					);
				})}
			</div>
			<h2 className="text-white">Planets</h2>
			<div className="card-group scrollx">
				{store.planets.map((element, index) => {
					//console.log(element.name);
					return (
						<AllCards
							key={index}
							prop1={element.name}
							prop2={element.climate}
							prop3={element.diameter}
							prop4={element.gravity}
						/>
					);
				})}
			</div>
		</div>
	);
};
/** */
