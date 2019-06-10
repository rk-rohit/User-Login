import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class LoginForm extends Component {
    state = {
        username : '',
        password : ''
    }

    handleChange = (e)=> {
        this.setState({
            [e.target.id] : e.target.value
        });
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.login(this.state);
    }

    render() {
        if (this.props.isLoggedIn) return <Redirect to='/' />

        return (
            <div className="container d-flex justify-content-center">
                <div className="card mt-5 col-md-6">
                    <div className="card-body">
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" onChange={this.handleChange}  />
                        </div>
                        <button type="submit" className="btn btn-primary float-right">Submit</button>
                        <div className="text-danger">{this.props.errorMessage}</div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        username : state.auth.username,
        password : state.auth.password,
        errorMessage : state.auth.errorMessage,
        isLoggedIn : state.auth.isLoggedIn
    }
}

const mapDispatchToProps = (dispatch)=> {
    return {
        login : (logininfo)=> dispatch({ type : 'LOGIN', logininfo })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);