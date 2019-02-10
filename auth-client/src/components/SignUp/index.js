import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

const SignUpPage = () => (
  <div>
    <h1>SignUp</h1>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class SignUpFormBase extends Component {
    constructor(props) {
        super(props);
        this.state = {...INITIAL_STATE};
    };

    // Submit
    onSubmit = event => {
        const { username, email, passwordOne } = this.state;
        this.props.firebase
            .doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState({...INITIAL_STATE});
                this.props.history.push(ROUTES.HOME);
            })
            .catch(error => {
                this.setState({error});
            })

            event.preventDefault();
    };

    // Change
    onChange = event => {
        console.log(event)
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    name="username"
                    value={username}
                    onChange={this.onChange}
                    type="text"
                    placeholder="name"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="email"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.onChange}
                    type="password"
                    placeholder="password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.onChange}
                    type="password"
                    placeholder="confirm pass"
                />
                <button  disabled={isInvalid} type="submit">signup</button>
                {error && <p>{error.message} אופסי</p>}
            </form>
        );
    }
}

const SignUpForm = withRouter(withFirebase(SignUpFormBase));

const SignUpLink = () => (
    <p>
        אין לך חשבון? <Link to={ROUTES.SIGN_UP}> הרשם פה יא זין </Link>
    </p>
)

export default SignUpPage;
export { SignUpForm, SignUpLink };