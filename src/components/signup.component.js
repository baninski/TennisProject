import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Регистрация</h3>

                <div className="form-group">
                    <label>Име и фамилия</label>
                    <input type="text" className="form-control" placeholder="Име и фамилия" />
                </div>

                <div className="form-group">
                    <label>Телефон</label>
                    <input type="text" className="form-control" placeholder="Телефон" />
                </div>

                <div className="form-group">
                    <label>Имейл</label>
                    <input type="email" className="form-control" placeholder="Имейл" />
                </div>

                <div className="form-group">
                    <label>Парола</label>
                    <input type="password" className="form-control" placeholder="Парола" />
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Регистрирай</button>
                <p className="forgot-password text-right">
                    Вече сте регистриран <a href="#">Влез?</a>
                </p>
            </form>
        );
    }
}