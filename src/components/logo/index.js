import React from 'react';

const Logo = ({companyLogo}) => {

    return (
       
        <div className="Logos">
         <strong>Some of the organisations you'll be joining by adopting Open Referral UK</strong>
       {CompanyLogo.map(d => {if (d.link){
         return <div key={d.id} className="Logo"><a href={d.link}><img alt="company logo" src={d.CompanyLogo.formats.thumbnail.url}/></a></div>
}
return <div key={d.id} className="Logo"><img alt="company logo" src={d.CompanyLogo.formats.thumbnail.url}/></div>
})}            
       </div>
     
  
    )
}

export default Logo;
