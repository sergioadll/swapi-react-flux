import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const SingleCharacter = props => {
	const { store, actions } = useContext(Context);
	const { theid } = useParams();
	const character = store.people[theid - 1];
	console.log(character);

	return (
		<div className="jumbotron">
			<h1 className="display-4">{character.name}</h1>
			<hr className="p-0 m-0" />
			<p className="card-text">
				Height: {character.height}
				<br />
				Weight: {character.mass}
				<br />
				Eye Color: {character.eye_color}
				<br />
				Hair Color: {character.hair_color}
				<br />
				Birth Year: {character.birth_year}
			</p>
			<Link to="/">
				<span className="btn btn-primary btn-lg" href="#" role="button">
					Back home
				</span>
			</Link>
		</div>
	);
};

SingleCharacter.propTypes = {
	match: PropTypes.object
};
