import React from 'react';
import {Link} from 'react-router-dom';
import LinkExternal from '../footer/LinkExternal';

const LinksList = ({list}) => {

	/* when no id what do we want? */
	list.labelText = list.TextToDisplay /*needs testing can we add in cms */
	return (
		
					<>
					
					{ 
					
					list.id  !== "" ?
					  list && !list.external ?
						( <li key={list.id}>
						 <Link aria-label={list.labelText} to={list.url}>
								{list.TextToDisplay}
							</Link>
						</li> ) : (
							
							<LinkExternal link={list} rel="noreferrer" target="_blank" />
						)
						:null
					}
						</>
			)
}

            export default LinksList;