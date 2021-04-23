import React from 'react';
import {Link} from 'react-router-dom';

const LinksList = ({list}) => {

	/* when no id what do we want? */
	
	return (
					<>
					{list.id  !== "" ?
						<li key={list.id}>
							<Link to={list.url}>
								{list.TextToDisplay}
							</Link>
						</li> :
						null 
					}
						</>
			)
}

            export default LinksList;