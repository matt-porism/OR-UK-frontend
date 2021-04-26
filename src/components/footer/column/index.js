import React, { Fragment } from 'react';
import LinksList from '../../links/LinksList';

const FooterColumn  = ({title, links, styles}) => {
    return(
    <Fragment>
  { 
    links.map(link => {
      return <ul key={link.id}><LinksList list={link}/></ul>
    })}
  </Fragment>
    )

}
export default FooterColumn;
