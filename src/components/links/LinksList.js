import React from 'react';
import {Link} from 'react-router-dom';

const LinksList = ({list}) => {

	return (
			
					<>
					{list.id  !== "" ?
						<li key={list.id}>
							<Link to={list.url}>
								{list.TextToDisplay}
							</Link>
						</li> :
						<li key="er">
						<Link to='/jh'></Link>
					</li>
}
						</>
					
)
				
                
			}

            export default LinksList;