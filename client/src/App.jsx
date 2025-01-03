-container">
            <h1>Welcome to the Client Application</h1>
            <p>Today's date is {formatDate(new Date())}</p>
            <Button label="Click Me" onClick={handleButtonClick} />
        </div>
    );import React from 'react';
import Button from './components/Button';
import { formatDate } from './utils/formatDate';

const App = () => {
    const handleButtonClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="app
};

export default App;
