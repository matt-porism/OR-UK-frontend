import React, { Component } from 'react';

export interface SideMenuProps {
    subMenu: array;
}

class componentName extends Component<SideMenuProps> {  	
  render() {
	const { subMenu } = this.props;
	if (!subMenu || subMenu.length === 0){
	  return;
	}
	//TO DO select the active sub menu item probably based off the URL passed to the API
    return (
		<div className="col-3"><div>In this section<hr className="mt-0 mb-0"></hr></div><ul className="nav flex-column">
		{subMenu.map(function(name, index){
					return <li className="nav-item" key={subMenu[index].Link}><a className="nav-link pl-0" href={subMenu[index].Link}>{subMenu[index].Label}</a></li>;
		})}
		</ul></div>	
    );
  }
}

export default componentName;
