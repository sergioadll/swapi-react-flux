import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//console.log("Store in navbar", store.favorites);
	return (
		<nav className="navbar navbar-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-white">Star Wars</span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="btn btn-light text-warning" variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<div>
						{store.favorites.map((element, index) => {
							console.log("NAVBAR: dropdown id", element.url);
							return (
								//needs to be linked to the id of the favorite object (element.id)
								<Dropdown.Item key={index} href={element.url}>
									{element.name}
									<button type="button" className="btn btn-danger btn-sm ml-auto">
										x
									</button>
								</Dropdown.Item>
							);
						})}
					</div>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
