import React, { Component } from "react";
import md5 from 'md5';

export class Account extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'username',
            password: 'password',
        }
    }

       handleInputChange = (event) => {
       const target = event.target;
       let value = event.target.value;
       const name = target.name;

       if (target.name === "password") {
           document.getElementById(name).type = "password";
           value = md5(event.target.value);
       }

       this.setState({
           [name]: value
       });

       document.getElementById(name).style.fontFamily = "Montserrat black";
    }

    setEmptyValue = (event) => {
        const name = event.target.name
        document.getElementById(name).value = "";

    }

    render() {
        return (
            <section className="wrapper__account">
                <div className="login">
                    <h4 className="h4_Account">Вход</h4>
                    <form className="form_Account">
                        <div className="text_area">
                            <input
                                type="text"
                                id="username"
                                name="username"
                                defaultValue={this.state.username}
                                onFocus={this.setEmptyValue}
                                className="text_input"

                            />
                        </div>
                        <div className="text_area">
                            <input
                                type="password"
                                id="password"
                                name="password"
                                defaultValue={this.state.password}
                                onFocus={this.setEmptyValue}
                                className="text_input"

                            />
                        </div>
                        <input
                            type="submit"
                            value="ВОЙТИ"
                            className="btn"

                        />
                    </form>
                </div>
            </section>
        );
    }
}