import React from 'react';

const Badge = ({ OrganisationsIntroText, numbers, title, linkTitle, label }) => {

    //return a single badge pass params
    //to be generic version


    const keyArray = Object.keys(numbers).filter(n => n !== 'id')

    const numbersAray = keyArray.map(number => {

        return <li className="numbers" key={number}><span>{numbers[number]}</span>{number}</li>

    });

    return (

        numbers &&
        <>
            <ul className="numbers-container">{numbersAray}</ul>
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScZU1lVUDZoruKzT86MV1Ko0v7LTBSA9-Y8fd9a-I73-jv2KA/viewform" className="button button-primary">{label}</a>
        </>
    );
}
export default Badge;

