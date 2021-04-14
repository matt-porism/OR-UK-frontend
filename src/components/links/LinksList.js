import React from 'react';
import {Link} from 'react-router-dom';

const LinksList = ({list}) => {
return (
				list.map( (link, index) => {
					return (
						<li key={list[index].id}>
							<Link to={link.url}>
								{link.TextToDisplay}
							</Link>
						</li>
					)
				})
                )
			}

            export default LinksList;