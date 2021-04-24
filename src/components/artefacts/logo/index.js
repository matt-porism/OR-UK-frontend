import React from 'react';
import  PropTypes  from 'prop-types';


const CompanyLogo = ({logo}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    const { formats, alternativeText, /*height, width,*/ id} = logo;
    //thumbnail does not work well for large screen spit out different image for large `formats.small ? ${BASE_URL}${formats.small.url}` : `${BASE_URL}${formats.thumbnail.url }`

    return (
        <>
       {  formats && (formats.thumbnail) && <p key={id}><img src={BASE_URL ? `${BASE_URL}${formats.thumbnail.url }`:""} alt={alternativeText ? alternativeText : "company_logo"}/></p> }
       </>
    )
}

CompanyLogo.propTypes = {
    logos: PropTypes.object
}

export default CompanyLogo;
