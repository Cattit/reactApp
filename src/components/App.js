import React, { Component } from "react";

import '../styles/App.css';

export class App extends Component {

    state = {
        lastName: '',
        name: '',
        middleName: '',
        email: '',
        phone: '',
        message: ''
    };

    handeleChange = (event) => {
        let id = event.target.id;

        this.setState({
            [id]: event.target.value
        });
    };

    handleClick = async () => {
        console.log(this.state)

        const response = await fetch('http://localhost:3000/sendMessage', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: "post",
            body: JSON.stringify(this.state)
        });

        this.setState({
            lastName: '',
            name: '',
            middleName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    render() {

        const { lastName, name, middleName, email, phone, message } = this.state;

        return (
            <div>
                <form>
                    <p>
                        <label for='lastName'>Фамилия</label>
                        <input id='lastName' value={lastName} onChange={this.handeleChange}></input>
                    </p>
                    <p>
                        <label for='name'>Имя</label>
                        <input id='name' value={name} onChange={this.handeleChange}></input>
                    </p>
                    <p>
                        <label for='middleName'>Отчество</label>
                        <input id='middleName' value={middleName} onChange={this.handeleChange}></input>
                    </p>
                    <p>
                        <label for='email'>Email</label>
                        <input id='email' value={email} onChange={this.handeleChange}></input>
                    </p>
                    <p>
                        <label for='phone'>Phone</label>
                        <input id='phone' value={phone} onChange={this.handeleChange}></input>
                    </p>
                    <p>
                        <label for='message'>Сообщение</label>
                        <textarea id='message' value={message} onChange={this.handeleChange}></textarea>
                    </p>
                    <button onClick={this.handleClick}>Отправить</button>
                </form>
            </div>
        );
    }
}

// export default App;