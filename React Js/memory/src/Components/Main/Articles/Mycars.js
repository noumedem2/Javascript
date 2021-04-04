import React, { useState } from 'react';
import Cars from "./Cars"

class Mycars extends React.Component {

    state = {
        cars: [
            { name: 'Ford', color: 'red', year: 2000 },
            { name: 'Mercedes', color: 'green', year: 1574 },
            { name: 'Peaugeot', color: 'black', year: 2018 }
        ]
    }

    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Lorem ipsum</p>
                {
                    this.state.cars.map((value, index) => {
                        return (<Cars key={index} year={value.year} color={value.color}>{value.name}</Cars>)
                    })
                }
            </div>
        )
    }
}

export default Mycars;