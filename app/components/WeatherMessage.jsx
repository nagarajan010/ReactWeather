var React = require('react');


var WeatherMessage = ({temp,location}) => {

    return (
        <div>
            <h2>Its {temp} in {location}</h2>
        </div>
    );
}

module.exports = WeatherMessage;