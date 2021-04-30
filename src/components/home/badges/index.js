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
       
        return <li className="numbers" key={number}><span>{numbers[number]}</span>{number}</li> 

    } );

    return (
        
       numbers && 
       <>
            <ul className="numbers-container">{numbersAray}</ul>
            <Button label={label} disabled={true} onClick={handleClick} styles="button button-primary" role="button" icon="label"/>
         </>
    );
}
    export default Badge;

