import React from 'react';


const Numbers = ({ numbers }) => {

    if (!numbers) return null;
    
    //return a single badge pass params

    const keyArray =  Object.keys(numbers).filter(n => n !== 'id' )
    
    const numbersAray =  keyArray.map(key => {
       
        return <li className="usingcolumns" key={key}><span>{numbers[key]}</span>{key}</li>

    } );

    return (
        <div>
            <ul className="row listnostyle addlargefont">{numbersAray}</ul>
        </div>
    );
}
    export default Numbers;