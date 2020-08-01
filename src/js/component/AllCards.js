import React from "react";
import PropTypes from "prop-types";

export const AllCards = props => {
	const { key, prop1, prop2, prop3, prop4 } = props;
	//console.log(prop2);

	return (
		<div className="card rounded bg-light m-1 border">
			<div className="card-body">
				<h5 className="card-title">{prop1}</h5>
				<hr />
				<p className="card-text">
					{prop2}
					<br />
					{prop3}
					<br />
					{prop4}
				</p>
			</div>
		</div>
	);
};
/**style="width: 18rem;"*/
AllCards.propTypes = {
	key: PropTypes.number,
	prop1: PropTypes.string,
	prop2: PropTypes.string,
	prop3: PropTypes.string,
	prop4: PropTypes.string
};
