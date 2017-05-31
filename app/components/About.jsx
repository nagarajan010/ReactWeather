var React = require('react');



var About = (props) => {
    return (
        <div>
            <h1 className="text-center">About</h1>
            <p>This is a Weather Application built on React. I have build this for the Complete React Web app Developer Course</p>
            <p>Here are some of the tools i have used:</p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a>
                </li>
                <li>
                    <a href="http://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for the Weather Data.
                </li>
            </ol>
        </div>
    );
}

module.exports = About;