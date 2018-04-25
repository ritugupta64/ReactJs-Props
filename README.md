-> Props: We use props to access the data from one component to another.
This example is based on where we're passing the data to parent and accessing to it into a child component.

-> To access the prop, {this.props.attributeName}

-> While calling the component if we've innerData then {this.props.children}

-> PropTypes: it allows to validate the props as per dataType.  

firstly install the propType through

npm install --save-dev prop-types

and after that import the =====

import PropTypes from 'prop-types'

and then

ClassName.propTypes = {
  
  propName:React.PropTypes.DataType(string, Number, object and func)


}


eg:: header.js

import React from 'react';
import * as t from 'prop-types';


export class Header extends React.Component{
  render(){
   let hoby = 'Hobbies';
    return(
        <div>
          
         <h1>Header Goes here</h1>
          
          <div>Site Name:: {this.props.site_name}</div>
          <p>Launch_days:: {this.props.launch_days}</p>
          <p>Emp Details:: {this.props.employee_details.name}</p>

          <h3>{hoby}</h3>

          <ul>
            hobbies are :

            {this.props.employee_details.hobbies.map((hobby,i) => {
                
                return <li key={i}>{hobby}</li>

            })}
        
          </ul>

          <hr/>

          {this.props.children}

    </div>
    )
  }
}



Header.propTypes = {
site_name: t.string,
launch_days: t.number,
employee_details: t.object,
children: t.element.isRequired
};


=================================================================


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

