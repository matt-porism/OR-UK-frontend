import React from 'react';
import { PropTypes } from 'prop-types';


const Title = ({title, id}) => {

    return <h2 key={id}>{title}</h2>

}

Title.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string
}
export default Title;