import React from "react";
import PropTypes from "prop-types";

export const AllCards = props => {
	const { key, element } = props;
	//console.log(element.name);

	return (
		<div className="card">
			<div className="card-body">
				<h5 className="card-title">{element.name}</h5>
				<p className="card-text">Lle and make up the bulk of the cards content.</p>
			</div>
		</div>
	);
};
/**style="width: 18rem;"*/
AllCards.propTypes = {
	key: PropTypes.number,
	element: PropTypes.object
};
