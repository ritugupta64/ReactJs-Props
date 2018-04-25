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