import React from 'react';
import PropTypes from 'prop-types';
import DOMPurify from 'dompurify';



const InjectHtml = ({paragraphText, itemKey } ) => {
  

    const cleanMarkup = (dirtyUnsafe) => {
        const sanitizedParam = DOMPurify.sanitize(dirtyUnsafe);
        return sanitizedParam;
    }
    return(
   
         <div key={itemKey} className="format" dangerouslySetInnerHTML={{ __html: cleanMarkup(paragraphText) }}></div>
    
    )
}

InjectHtml.propTypes = {
    paragraphText: PropTypes.string,
}
export default InjectHtml;