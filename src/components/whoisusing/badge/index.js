import React from 'react';


const Numbers = ({ numbers }) => {

    if (!numbers) return null;
    
    //return a single badge pass params

    const keyArray =  Object.keys(numbers).filter(n => n !== 'id' )
    
    const numbersAray =  keyArray.map(key => {
       
        return <li className="numbers" key={key}><span>{numbers[key]}</span>{key}</li>

    } );

    return (
        <div className="who">
            <ul className="numbers-container">{numbersAray}</ul>
        </div>
    );
}
    export default Numbers;