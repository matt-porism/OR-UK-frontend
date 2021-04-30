import React from 'react';
import {Link} from 'react-router-dom';
import LinkExternal from '../footer/LinkExternal';

const LinksList = ({list}) => {

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
						<li key={list.id}>	
							<LinkExternal link={list} />
							</li>
						)
						:null
					}
						</>
			)
}

            export default LinksList;