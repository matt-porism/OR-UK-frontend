import React from 'react';



const Badge = ( {OrganisationsIntroText, numbers, title, linkTitle }) => {
    
    //return a single badge pass params
    return (
        <>
        <div className="who-one">
        <p>{numbers.considering}</p>
            <p>Considering ORUK</p>
          
          
        </div>
        <div className="who-two">
        <p>{numbers.adopting}</p>
            <p>Adopting ORUK</p>
            
        </div>

        <div className="who-three">
        <p>{numbers.adopted}</p>
            <p>Adopted ORUK</p>
            
        </div>

        <div className="who-four">
        
            <p>Register now</p><br/>
            
        </div>
            
     </>
    );
}
    export default Badge;