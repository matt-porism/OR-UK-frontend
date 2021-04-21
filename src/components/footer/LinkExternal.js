import React from 'react';
import  PropTypes  from 'prop-types';

const LinkExternal = ({link, target}) =>  {

    let rel = target && target === "_blank" ? "noreferrer noopener" : "";

    let anchorLink = rel.length > 0? <a href={link.url} rel={rel} target={target}>{link.TextToDisplay}</a>
    : <a href={link.url} target={target}>{link.TextToDisplay}</a>
      
  return (
      <>
    {link &&  anchorLink}
  </>
  )
}

LinkExternal.propType = {
    link: PropTypes.string.isRequired,
    target: PropTypes.string.isRequired,
}

export default LinkExternal;