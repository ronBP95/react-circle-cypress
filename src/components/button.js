import React from 'react';

const onClick = () => {
    window.alert("The button was clicked!")
}

const Button = () => {
    return (
        <div>
            <button onClick={onClick}>Click Me!</button>
        </div>
    );
}

export default Button;
