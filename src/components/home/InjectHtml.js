import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';

const InjectHtml = ({paragraphText, itemKey } ) => {
  

    const cleanMarkup = (dirtyUnsafe) => {
        const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
        return sanitizedParam;
    }
    return(
   
         <section key={itemKey} className="format" dangerouslySetInnerHTML={{ __html: cleanMarkup(paragraphText) }}></section>
    
    )
}

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}
export default InjectHtml;