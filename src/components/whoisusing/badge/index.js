import React from 'react';


const Numbers = ( {OrganisationsIntroText, numbers, title, linkTitle }) => {
    
    //return a single badge pass params

    const keyArray =  Object.keys(numbers).filter(n => n !== 'id' )
    
    const numbersAray =  keyArray.map(x => {
       
        return <li className="usingcolumns" key={x}>{numbers[x]}</li>

    } );

    const keyAray =  keyArray.map(x => {
       
        return <li className="usingcolumns" key={x}>{x}</li>

    } );

    return (
        
       numbers && 
       <>
            <ul className="row listnostyle addlargefont">{numbersAray}</ul>
            <ul className="row listnostyle">{keyAray}</ul>
         </>
    );
}
    export default Numbers;