import React from 'react';
import CompanyLogo from '../artefacts/logo';
//import Logo from '../logo';
import MappableList from "../shared/mapping/";
import BodyTextList from "../shared/bodytextlist/"
import Title from '../shared/title/';


const Card = ({title, bodyText, cardImage, id, itemLinks, paragraphText,  styleName}) => {
    /* return one org a single card  text, image, title and links could be optional*/
 
 //const { id, orgTitle, organisationLogo, orgLinks} = organisation
    return (
        <div key={id} className={styleName}>
            {cardImage && <CompanyLogo logo={cardImage}/>}
      { title && <Title title={title}/> }
        { bodyText && <p>{bodyText}</p> }
        
              { paragraphText && <BodyTextList textList={paragraphText}/> }

       
        <ul className="listnostyle">
        { itemLinks &&  <MappableList mapList={itemLinks} id={id} styleName="listnostyle" /> }
        </ul>
          </div>
    );
};

export default Card;