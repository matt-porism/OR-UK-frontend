import React from 'react';
import { Link } from 'react-router-dom';
import Badge from "../badges/"
import Logo from '../../logo/'


function Who({ CompanyLogo, OrganisationsIntroText, numbers, title, linkTitle }) {

    return (
      
            <div className="who">
               <h2> {title}</h2>
              <div className="whogrid">
              { /*<Section headingText={headingText} bodyText={bodyText} /> craft to go into section*/ }
              <Badge numbers={numbers} />
        </div>
        <div className="row">
            <div className="column">
                <Logo logoList={CompanyLogo} />
                </div>
            </div>
        <div></div>
        {linkTitle =true && <Link className="nav-link" to="view or orgs">
          "View all of the orgnaisations in our community"
        </Link>}
     </div>

    );
}
    export default Who;