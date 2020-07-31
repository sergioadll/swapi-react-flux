import React, { useState, useEffect, useContext } from "react";
import "../../styles/home.scss";
import { AllCards } from "../component/AllCards";
import { Context } from "../store/appContext";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div>
			{store.people.map((character, index) => {
				//console.log(character.name);
				return <AllCards key={index} people={character} />;
			})}
		</div>
	);
};
