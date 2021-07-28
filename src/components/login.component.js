import React, { Component } from "react";

export default class Login extends Component {
    render() {
        return (
            <form>

                <h3>Влизане в акаунт</h3>

                <div className="form-group">
                    <label>Имейл</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Парола</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label" htmlFor="customCheck1">Запомни ме</label>
                    </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">Влизане</button>
                <p className="forgot-password text-right">
                    Забравена <a href="#">парола?</a>
                </p>
            </form>
        );
    }
}
