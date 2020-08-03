import React from "react";
import PropTypes from "prop-types";

export const Card = props => {
	const { name, details } = props;
	//console.log("details on all cards", details);
	return (
		<div className="card rounded bg-light m-1 border">
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
			</div>
		</div>
	);
};
Card.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	details: PropTypes.array
};
