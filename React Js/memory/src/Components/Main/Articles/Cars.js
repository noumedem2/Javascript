import React, { useState } from 'react';

const Car = ({ year, children, color }) => {
    return (
        <div className="Cars" style={
            {
                backgroundColor: color,
                width: '400px',
                padding: '10px',
                margin: '5px auto',
                color: 'White'
            }
        }>
            <p>Marque : {children} </p>
            <p>Couleur : {color} </p>
            <p>Annee : {year} </p>
        </div>
    )
}
export default Car;