import React, { Fragment } from 'react';
import LinkListItem from '../../links/LinkListItem';

const FooterColumn  = ({title, links, styles}) => {
    return(
    <Fragment>
  { 
    links.map(link => {
      return <ul key={link.id}><LinkListItem link={link}/></ul>
    })}
  </Fragment>
    )

}
export default FooterColumn;
