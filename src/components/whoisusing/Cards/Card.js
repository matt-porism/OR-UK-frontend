import React from 'react';
import CompanyLogo from '../../artefacts/logo';

import LinksList from '../../links/LinksList';
//use generic

const Card = ({organisation, styleName}) => {
    /* return one  single card */
 
 const { id, orgTitle, organisationLogo, orgLinks} = organisation
 
    let logo = <></>;

    if (organisationLogo && organisationLogo.CompanyLogo && organisationLogo.link){
        logo = <a href={organisationLogo.link} className="card__img-container"><CompanyLogo logo={organisationLogo.CompanyLogo}/></a>
    }else{
        logo = <CompanyLogo logo={organisationLogo.CompanyLogo}/>
    }

    return (
        <li key={id} className={styleName}>
            {logo}
            <h3>{orgTitle}</h3>
            <ul className="listnostyle card__sub-list">

            { orgLinks && Object.keys(orgLinks).length > 0 && orgLinks.map(orgLink => {
                orgLink.external = true;
                return <LinksList key={`${id}${orgLink.id}`} styleName="listnostyle"  list={orgLink}/>
            }) 
            }
            </ul>
          </li>
    );
};

export default Card;