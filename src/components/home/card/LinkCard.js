import React from 'react';
import LinkListItem from '../../links/LinkListItem';


const LinkCard = ({ linkItem, styleName }) => {
    /* return one a single card */
    const { id } = linkItem;

    return (
        <ul key={`${id}_ul`} className={styleName}>
            <LinkListItem key={linkItem.id} styleName="listnostyle"  link={linkItem}/>
          </ul>
    );
};

export default LinkCard;