import React from 'react';
import Button from '../../shared/button';


const handleClick = (evemt) => {
    console.log("Button clicked ");
}


const Badge = ( {OrganisationsIntroText, numbers, title, linkTitle, label }) => {
    
    //return a single badge pass params
    //to be generic version


    const keyArray =  Object.keys(numbers).filter(n => n !== 'id' )
    
    const numbersAray =  keyArray.map(number => {
       
        return <div className="numbers" key={number}>{numbers[number]}<p>{number}</p></div> 

    } );

    return (
        
       numbers && 
       <>
            <div className="contain listnostyle addlargefont">{numbersAray}
            <Button label={label} disabled={true} onClick={handleClick} styles="numbers" role="button" icon="label"/></div>
         </>
    );
}
    export default Badge;

