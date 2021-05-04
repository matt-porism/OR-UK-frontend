import React from 'react';
import LinksList from '../links/LinksList';


const ReadNextItem = ({ linkItem, styleName }) => {

    return (
            <LinksList key={linkItem.id} styleName={styleName}  list={linkItem}/>
    );
};

export default ReadNextItem;