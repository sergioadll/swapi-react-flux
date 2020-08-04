import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

import PropTypes from "prop-types";

export const Card = props => {
	const { url, name, details } = props;
	const { store, actions } = useContext(Context);
	//console.log("CARD: url type", typeof url, url);
	//console.log("details on all cards", details);
	return (
		<div className="container">
			<div className="card rounded bg-light m-1 p-1 border">
				<div className="card-body">
					<h5 className="card-title">{name}</h5>
					<hr className="p-0 m-0" />
					<p className="card-text">
						{details[0].field}
						{details[0].data}
						<br />
						{details[1].field}
						{details[1].data}
						<br />
						{details[2].field}
						{details[2].data}
					</p>
					<Button href={url}>Details</Button>
					<Button
						type="button"
						className="btn btn-dark justify-content-center"
						onClick={() => actions.addFavorite(store.favorites, name, url)}>
						Fav
					</Button>
				</div>
			</div>
		</div>
	);
};
//en el onClick no se pasa el último parámetro, que debería de ser el id del elemento para poder hacerle el link
Card.propTypes = {
	url: PropTypes.string,
	name: PropTypes.string,
	details: PropTypes.array
};
