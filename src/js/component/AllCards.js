import React from "react";
import PropTypes from "prop-types";

export const AllCards = props => {
	const { key, prop1 } = props;
	console.log(prop1);

	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{prop1}</h5>
				<p className="card-text">aja</p>
			</div>
		</div>
	);
};
/**style="width: 18rem;"*/
AllCards.propTypes = {
	key: PropTypes.number,
	prop1: PropTypes.object
};
