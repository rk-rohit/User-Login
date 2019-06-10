import React, {Component} from 'react';
import Navbar from './component/Navbar';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
		<div className="App">
			<BrowserRouter>
				<Navbar/>
				<Route exact path='/' component={EmployeeList} />
				<Route path='/login' component={LoginForm} />
			</BrowserRouter>
		</div>
    );
  }
}

export default App;
