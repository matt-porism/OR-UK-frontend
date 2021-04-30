import React from 'react';
import Title from '../tiles';
import LinksList from '../../links/LinksList';

const FooterColumn = ({ title, links }) => {

  return (
    <div className="footer__column">
      <Title title={title}/>
      <ul>
      {
        links.map(link => {
          return <LinksList key={link.id} list={link} />
        })}
      </ul>
    </div>
  )

}
export default FooterColumn;
