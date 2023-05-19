import React, {useState} from 'react';
import {Register} from "../components";

const Login = () => {
    const [currentForm, setCurrentForm] = useState('login');
    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }
    return (
        <div className="App">
            {
                currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
            }
        </div>
    )
};

export default Login;