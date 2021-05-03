import React, { Fragment } from 'react';
import LinkListItem from '../../links/LinkListItem';


const Learn = ({list}) => {

    return (
    <Fragment>
        { 
            list.map((item) => {
            return <section key={item.id}><ul><LinkListItem link={item} /></ul></section>
        }) 
    }
     </Fragment>

    );
}
    export default Learn;