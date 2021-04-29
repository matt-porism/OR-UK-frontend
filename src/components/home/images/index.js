import React from 'react';
import CompanyLogo from '../../artefacts/stakeholder';

//use generic
 
const ImageCard = ({logo, id, styleName}) => {
    /* return one org a single card */
    /* variation in api properties */
  
    return (
        <div key={id} className={styleName}>
            {logo && <CompanyLogo logo={logo}/>}
    
          </div>
    );
};

export default ImageCard;