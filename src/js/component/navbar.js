import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Dropdown from "react-bootstrap/Dropdown";
import Button from "react-bootstrap/Button";
import "../../styles/navbar.scss";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	//console.log("Store in navbar", store.favorites);
	return (
		<nav className="navbar border-bottom border-primary mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1 text-warning">Star Wars</span>
			</Link>
			<Dropdown>
				<Dropdown.Toggle className="btn btn-light text-warning" variant="success" id="dropdown-basic">
					Favorites
				</Dropdown.Toggle>

				<Dropdown.Menu className="dropdown-box">
					<div>
						{store.favorites.map((element, index) => {
							//console.log("NAVBAR: dropdown id", element.url);
							return (
								<div key={index} className="row">
									<Dropdown.Item href={element.url}>
										<span className="dropdown-item">{element.name}</span>
									</Dropdown.Item>
									<Button
										type="button"
										className="btn btn-danger btn-sm ml-auto mr-4"
										onClick={() => actions.removeFavorite(index)}>
										x
									</Button>
								</div>
							);
						})}
					</div>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
