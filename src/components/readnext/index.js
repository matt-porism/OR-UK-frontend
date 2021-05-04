import React from 'react';
import LinkListItem from '../links/LinkListItem';


const ReadNextItem = ({ linkItem, styleName }) => {

    return (
            <LinkListItem key={linkItem.id} styleName={styleName}  link={linkItem}/>
    );
};

export default ReadNextItem;