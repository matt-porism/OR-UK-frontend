import React from 'react';
import Button from '../../shared/button';


const handleClick = (evemt) => {
    console.log("Button clicked ");
}


const Badge = ( {OrganisationsIntroText, numbers, title, linkTitle, label }) => {
    
    //return a single badge pass params
    //to be generic version

    const keyArray =  Object.keys(numbers).filter(n => n !== 'id' )
    
    const numbersAray =  keyArray.map(x => {
       
        return <div className="numbers" key={x}>{numbers[x]}</div> 

    } );

    return (
        
       numbers && 
       <>
            <div className="contain listnostyle addlargefont">{numbersAray}
            <Button label={label} disabled={true} onClick={handleClick} styles="style" role="button" icon="label"/></div>
            {/*<div className="listnostyle">{keyAray}</div>*/}
         </>
    );
}
    export default Badge;

