import React from 'react';
import  PropTypes  from 'prop-types';


const CompanyLogo = ({logo}) => {
    
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const { formats, alternativeText, /*height, width,*/ id} = logo;
  
    let logoUrl = BASE_URL ? `${BASE_URL}${logo.CompanyLogo.formats.thumbnail.url }`:"";

    //thumbnail does not work well for large screen spit out different image for large `formats.small ? ${BASE_URL}${formats.small.url}` : `${BASE_URL}${formats.thumbnail.url }`
    //massive refactor required 
    return (
        <>
       {  formats && (formats.thumbnail) ? <p key={id}><div className="CompanyLogo" style={{ backgroundImage: `url(${logoUrl})` }} title={alternativeText ? alternativeText : "company_logo"}/></p>
       : (<div key={id} className="CompanyLogo" style={{ backgroundImage: `url(${logoUrl})` }} title={alternativeText ? alternativeText : ""}  ></div>) }
       </>
    )
}

CompanyLogo.propTypes = {
    logos: PropTypes.object
}

export default CompanyLogo;
