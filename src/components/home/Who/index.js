import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';


function Who({ counters, logoList, title, linkTitle }) {

    return (
      
            <Fragment>
              { /*<Section headingText={headingText} bodyText={bodyText} /> craft to go into section*/ }
            <h1> Who's using open Referral UK</h1>
           
            {linkTitle =true && <Link className="nav-link" to="view or orgs">
          "View all of the orgnaisations in our community"
        </Link>}
       
     </Fragment>

    );
}
    export default Who;