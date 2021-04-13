import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Who({ CompanyLogo, OrganisationsIntroText, numbers, title, linkTitle }) {

  let introText = (<></>);
	if (OrganisationsIntroText){
		introText = <><p>{OrganisationsIntroText}</p>}</>
	}

    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> craft to go into section*/ }
            <h1> {title}</h1>
            {introText}
           <div className="row">
            <div className="column">
              {numbers.considering}
            </div>
            <div className="column">
            {numbers.adopting}
            </div>
            <div className="column">
            {numbers.adopted}
            </div>                        
           </div>
           <div className="row">
              <div className="column">
              Considering ORUK
              </div>
              <div className="column">
              Adopting ORUK  
              </div>
              <div className="column">
              Adopted ORUK
              </div>                
           </div>
           <div className="Logos">
             <strong>Some of the organisations you'll be joining by adopting Open Referral UK</strong>
           {CompanyLogo.map(d => {if (d.link){
             return <div key={d.id} className="Logo"><a href={d.link}><img alt="company logo" src={d.CompanyLogo.formats.thumbnail.url}/></a></div>
}
return <div key={d.id} className="Logo"><img alt="company logo" src={d.CompanyLogo.formats.thumbnail.url}/></div>
})}            
           </div>
            {linkTitle =true && <Link className="nav-link" to="view or orgs">
          "View all of the organisations in our community"
        </Link>}
       
     </Fragment>

    );
}
    export default Who;