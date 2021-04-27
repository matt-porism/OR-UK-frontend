import React from 'react';
import LinksList from '../../links/LinksList';


const LinkCard = ({ linkItem, styleName }) => {
    /* return one a single card */
    const { id } = linkItem;

    return (
        <ul key={`${id}_ul`} className={styleName}>
            <LinksList key={linkItem.id} styleName="listnostyle"  list={linkItem}/>
          </ul>
    );
};

export default LinkCard;