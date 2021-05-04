import React from 'react';
import { Link } from 'react-router-dom';
import LinkExternal from '../footer/LinkExternal';

const LinkListItem = ({ link }) => {
	if (!link) return null;

	let linkElToRender;

	if (link.isExternal) {
		linkElToRender = <LinkExternal link={link} rel="noreferrer" target="_blank" />
	} else {
		linkElToRender = <Link to={link.url}>	{link.TextToDisplay} </Link>
	}

	return (
		<li key={link.id}>
			{linkElToRender}
		</li>
	)
}

export default LinkListItem;
