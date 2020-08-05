import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SinglePlanet = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const singlePlanet = store.planets[theid - 1];
	//console.log("planet", store);
	if (store.planets.length > 1) {
		return (
			<div className="jumbotron">
				<h1 className="display-4">{singlePlanet.name}</h1>
				<hr className="p-0 m-0" />
				<p className="card-text">
					Rotation Period: {singlePlanet.rotation_period}
					<br />
					Orbital Period: {singlePlanet.orbital_period}
					<br />
					Diameter: {singlePlanet.diameter}
					<br />
					Climate: {singlePlanet.climate}
					<br />
					Terrain: {singlePlanet.terrain}
				</p>
				<Link to="/">
					<span className="btn btn-primary btn-lg" href="#" role="button">
						Back home
					</span>
				</Link>
			</div>
		);
	} else {
		return <h2 className="text-light">Loading Planets...</h2>;
	}
};
