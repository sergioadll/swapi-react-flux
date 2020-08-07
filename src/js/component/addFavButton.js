import React, { useState, useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import Button from "react-bootstrap/Button";

export const AddFavButton = data => {
	const { store, actions } = useContext(Context);
	const { name, url } = data;
	const prevFavorites = store.favorites;
	const existentFavorite = prevFavorites.filter(prevFavorites => prevFavorites.name === name);
	if (existentFavorite.length == 0) {
		//if the element is not in favorites we return the button
		return (
			<Button
				type="button"
				className="btn btn-dark ml-3"
				onClick={() => {
					actions.addFavorite(name, url);
				}}>
				Fav
			</Button>
		);
	} else if (existentFavorite.length > 0) {
		//if the element is already in favorites we delete it and update the store
		return (
			<Button
				type="button"
				className="btn btn-warning ml-3"
				onClick={() => {
					actions.addFavorite(name, url);
				}}>
				Fav
			</Button>
		);
	}
};
