import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { AllCards } from "../component/AllCards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			<h2>Characters</h2>
			<div className="card-group">
				{store.people.map((element, index) => {
					//console.log(character.name);
					return <AllCards key={index} element={element} />;
				})}
			</div>
			<h2>planets</h2>
			<div className="card-group">
				{store.planets.map((element, index) => {
					console.log(element.name);
					return <AllCards key={index} element={element} />;
				})}
			</div>
		</div>
	);
};
/** */
