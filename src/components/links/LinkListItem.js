import React from 'react';
import { Link } from 'react-router-dom';
import LinkExternal from '../footer/LinkExternal';

const LinkListItem = ({ link }) => {
	console.log(`🏓🏓🏓 link `, link);
	if (!link) return null;

	link.labelText = link.textToDisplay;

	let linkElToRender;

	if (link.isExternal) {
		linkElToRender = <LinkExternal link={link} rel="noreferrer" target="_blank" />
	} else {
		linkElToRender = <Link to={link.url}>	{link.textToDisplay} </Link>
	}

	return (
		<li key={link.id}>
			{linkElToRender}
		</li>
	)

	// return (

	// 				<>

	// 				{ 

	// 				link.id  !== "" ?
	// 				  link && !link.external ?
	// 					( <li key={link.id}>
	// 					 <Link aria-label={link.labelText} to={link.url}>
	// 							{link.textToDisplay}
	// 						</Link>
	// 					</li> ) : (
	// 					<li key={link.id}>	
	// 						<LinkExternal link={link} rel="noreferrer" target="_blank" />
	// 						</li>
	// 					)
	// 					:null
	// 				}
	// 					</>
	// 		)
}

export default LinkListItem;