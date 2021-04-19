import React, { Fragment } from 'react';
import LinksList from '../../links/LinksList';


const Learn = ({list}) => {

    return (
    <Fragment>
        { 
            list.map((item) => {
            return <section key={item.id}><ul><LinksList list={item} /></ul></section>
        }) 
    }
     </Fragment>

    );
}
    export default Learn;