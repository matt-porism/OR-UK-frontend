import React from 'react';


const Logo = ({logoList}) => {
    const BASE_URL = process.env.REACT_APP_BASE_URL
    return (
       
        <div className="Logos">
        <p> <strong>Some of the organisations you'll be joining by adopting Open Referral UK</strong></p>
       { logoList && logoList.map(d => {
         
         if (d.link) {
              return <a key={d.id} className="Logo" href={d.link}><img alt="company logo" src={`${BASE_URL}${d.CompanyLogo.formats.thumbnail.url}`}/></a>
          }
              return <div key={d.id} className="Logo"><img alt="company logo" src={d.CompanyLogo.formats.thumbnail.url}/></div>
        })}            
       </div>
    )
}

export default Logo;
