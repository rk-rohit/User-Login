import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

const Navbar = (props)=> {
    console.log(props);
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <Link to='/' className="navbar-brand" href="#">Redux Tutorial</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                   {
                        props.auth.isLoggedIn  ? (
                            <React.Fragment>
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" href="#">Home <span className="sr-only">(current)</span></Link>
                                </li>
                                <li className="nav-item active">
                                    <Link to='/' className="nav-link" href="#" onClick={props.signOut}>Logout</Link>
                                </li>
                            </React.Fragment>
                        ) : (
                            <li className="nav-item">
                                <Link to='/login' className="nav-link" href="#">Login</Link>
                            </li>
                        )

                    }
                </ul>
            </div>
        </nav>
    )
}

const mapStateToProps = (state)=> {
    return {
        auth : state.auth 
    }
}

const mapDispatchtoProps = (dispatch)=> {
    return {
        signOut : ()=> dispatch({'type' : 'SIGNOUT'})
    }
}
export default connect(mapStateToProps, mapDispatchtoProps)(Navbar);