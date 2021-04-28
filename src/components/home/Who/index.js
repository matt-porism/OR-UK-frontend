import React from 'react';
import { Link } from 'react-router-dom';
import Badge from "../badges/"
import Logo from '../../logo/'
import CardList from '../card/';




const Who = ({ CompanyLogo, id, OrganisationsIntroText, numbers, title, linkTitle }) => {
    
    return (
      
            <div className="who">
               <h2> {title}</h2>
              <div>
              <Badge  numbers={numbers} label="Register now"/>
        </div>
        <p>{OrganisationsIntroText}</p>
        <div><CardList id={id} itemList={CompanyLogo} styles="" /></div>
        {linkTitle =true && <Link className="nav-link" to="view or orgs">
          "View all of the orgnisations in our community"
        </Link>}
     </div>

    );
}
    export default Who;