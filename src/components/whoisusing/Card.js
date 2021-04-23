import React from 'react';
//import Logo from '../logo';
import LinksList from '../links/LinksList';
import Title from '../shared/title/';


const Card = ({organisation, styleName}) => {
    /* return one org a single card */
    ///* <Logo></Logo> */
   
 const { id, orgTitle, organisationLogo, orgLinks} = organisation
 console.log(organisationLogo);
 
    return (
        <div key={id} className={styleName}>
        <Title title={orgTitle}/>
        <ul className="listnostyle">

        { orgLinks && orgLinks.map(orgLink => {
            return <LinksList key={`${id}${orgLink.id}`} styleName="listnostyle"  list={orgLink}/>
        }) 
        }
        </ul>
          </div>
    );
};

export default Card;