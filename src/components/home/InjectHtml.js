import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';



const InjectHtml = ({paragraphText}) => {
  

    const cleanMarkup = (dirtyUnsafe) => {
        const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
        return sanitizedParam;
    }
    return(
    
         <p dangerouslySetInnerHTML={{ __html: cleanMarkup(paragraphText) }}></p>
    
    )
}

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}
export default InjectHtml;