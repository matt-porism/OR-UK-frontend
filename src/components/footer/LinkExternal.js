import React from 'react';
import  PropTypes  from 'prop-types';

const LinkExternal = ({link, target, styleName}) =>  {

    let rel = target && target === "_blank" ? "noreferrer noopener" : "";

    let anchorLink = rel.length > 0? <a aria-label={link.labelText} href={link.url} rel={rel} target={target} className={styleName}>{link.textToDisplay}</a>
    : <a aria-label={link.labelText} href={link.url} target={target} className={styleName}>{link.textToDisplay}</a>
      
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