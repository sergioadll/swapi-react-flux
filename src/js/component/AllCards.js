import React from "react";
import PropType from "prop-types";

export const AllCards = prop => {
	return (
		<div className="card m-2">
			<img alt="Card image cap" className="card-img-top" src={prop.image} />
			<div className="card-body">
				<h5 className="card-title">{prop.title}</h5>
				<p className="card-text">{prop.description}</p>
				<a href={prop.buttonUrl} className="btn btn-primary">
					{prop.buttonLable}
				</a>
			</div>
		</div>
	);
};

AllCards.propType = {
	title: PropType.string,
	image: PropType.string,
	description: PropType.string,
	buttonUrl: PropType.string,
	buttonLable: PropType.string
};
