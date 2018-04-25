import React from 'react';
import {render} from 'react-dom';
import {Header} from './header';
import {Footer} from './footer';
import './index.css';

class App extends React.Component{
	render(){

		var employee = {

			name:'max',
			hobbies:['singing', 'cooking', 'sleeping']

		}

		return(
<div className="container">
	<div className="row">
		<div className="col-xs-12">
			<Header site_name={"DefaultName"} launch_days={20} employee_details={employee}>
			    <p>header content goes here </p>
			 </Header>   
		</div>
	</div>
	<div className="row">
		<div className="col-xs-12">
			<h1>This is the first component along with multiple component</h1>
		</div>
	</div>
    <div className="row">
	  <div className="col-xs-12">
		<Footer/>
	 </div>	
	</div>
</div>
		)
	}
}

render(<App />, document.getElementById('root'));

