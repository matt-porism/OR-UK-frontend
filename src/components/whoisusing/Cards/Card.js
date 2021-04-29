import React from 'react';
import CompanyLogo from '../../artefacts/logo';

import LinksList from '../../links/LinksList';
import Title from '../../shared/title/';
//use generic

const Card = ({organisation, styleName}) => {
    /* return one  single card */
 
 const { id, orgTitle, organisationLogo, orgLinks} = organisation
 
    return (
        <div key={id} className={styleName}>
            {organisationLogo && organisationLogo.CompanyLogo && <CompanyLogo logo={organisationLogo.CompanyLogo}/>}
        <Title title={orgTitle}/>
        <ul className="listnostyle">

        { orgLinks && Object.keys(orgLinks).length > 0 && orgLinks.map(orgLink => {
            return <LinksList key={`${id}${orgLink.id}`} styleName="listnostyle"  list={orgLink}/>
        }) 
        }
        </ul>
          </div>
    );
};

export default Card;