import React from 'react';
import Logo from '../../logo/'


const Badge = ({ CompanyLogo, OrganisationsIntroText, numbers, title, linkTitle }) => {
    return (
        <>
        <div className="who-one">
        <p>{numbers.considering}</p>
            <p>Considering ORUK</p>
            <Logo logoList={["mylogo"]} />
        </div>
        <div className="who-two">
        <p>{numbers.adopting}</p>
            <p>Adopting ORUK</p>
            <Logo logoList={["mylogo"]} />
        </div>

        <div className="who-three">
        <p>{numbers.adopted}</p>
            <p>Adopted ORUK</p>
            <Logo logoList={["mylogo"]} />
        </div>

        <div className="who-four">
        
            <p>Register now</p><br/>
            <Logo logoList={["mylogo"]} />
        </div>
            
     </>
    );
}
    export default Badge;