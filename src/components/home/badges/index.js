import React from 'react';

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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZU1lVUDZoruKzT86MV1Ko0v7LTBSA9-Y8fd9a-I73-jv2KA/viewform" className="numbers button">{label}</a></div>
         </>
    );
}
    export default Badge;

