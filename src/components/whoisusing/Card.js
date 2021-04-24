import React from 'react';
import CompanyLogo from '../artefacts/logo';
//import Logo from '../logo';
import LinksList from '../links/LinksList';
import Title from '../shared/title/';


const Card = ({organisation, styleName}) => {
    /* return one org a single card */
 
 const { id, orgTitle, organisationLogo, orgLinks} = organisation
   console.log("Organisation ", organisation.id);
 
    return (
        <div key={id} className={styleName}>
            {organisationLogo && <CompanyLogo logo={organisationLogo.CompanyLogo}/>}
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