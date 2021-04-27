import React from 'react';
import { Link } from 'react-router-dom';

const LinksList = ({ list }) => {

	/* when no id what do we want? */

	return (
		<>
			{list.id !== "" ?
				<li key={list.id} className="listnostyle">
					<h2>
						<Link aria-label="findsuitabletext" to={list.url}>
							{list.TextToDisplay}
						</Link>
					</h2>
				</li>
				: null
			}
		</>
	)
}

export default LinksList;