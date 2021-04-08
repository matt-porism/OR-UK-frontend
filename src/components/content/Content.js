import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser'; 

export interface ContentProps {
  data: object;
}

export class Content extends Component<ContentProps> {
  render() {
    const { data } = this.props;
	if (!data){
		return (<div></div>);
	}
	let apiData = JSON.parse(data);
	if (!apiData){
		return (<div></div>);
	}
	
	const ReactDOM = require('react-dom')
	const div = document.createElement('div');
	div.innerHTML = "<h2>Header 1</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis neque, pretium nec auctor sed, pharetra in eros. Curabitur facilisis tellus ac tellus fringilla, eu varius est aliquet. Duis ac enim vel risus egestas rhoncus. In ligula nunc, tempus ut diam at, hendrerit pretium neque. Cras ornare lobortis suscipit. Duis quam mauris, venenatis id tortor non, tristique rutrum velit. Vivamus ac nisi malesuada, lobortis quam vel, aliquam ipsum. Fusce tincidunt ullamcorper mauris suscipit dictum. Maecenas blandit ultricies rutrum. Vestibulum ut massa id nulla euismod bibendum. Nam ac malesuada urna. Donec vulputate sapien non ullamcorper euismod. Fusce non pharetra dui. Phasellus sit amet commodo augue.</p><p>Fusce maximus faucibus est vel convallis. Vivamus ipsum leo, finibus a lacus a, vulputate ultricies felis. Vivamus sem ligula, fringilla eget convallis ut, lacinia ultricies massa. In sagittis ante a tincidunt posuere. Mauris fermentum posuere risus. Sed tortor dui, laoreet pulvinar ipsum vehicula, posuere hendrerit libero. Aliquam vitae justo et velit hendrerit imperdiet. Donec nunc lectus, rhoncus vitae nulla ac, lobortis ornare neque. Donec pellentesque enim est, at vulputate augue egestas at.</p><p>Praesent nisl nulla, hendrerit a elit non, mollis consectetur nulla. Suspendisse velit nunc, mattis nec mauris quis, posuere molestie lorem. In id tellus dapibus, dignissim justo et, pulvinar justo. In in mollis diam. Phasellus vel lacus ornare, facilisis libero sed, congue turpis. Cras eu pretium dui, eu malesuada nulla. Phasellus ac urna et est bibendum aliquet. Nullam rhoncus pretium nunc in lacinia.</p><h2>Header 2</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam felis neque, pretium nec auctor sed, pharetra in eros. Curabitur facilisis tellus ac tellus fringilla, eu varius est aliquet. Duis ac enim vel risus egestas rhoncus. In ligula nunc, tempus ut diam at, hendrerit pretium neque. Cras ornare lobortis suscipit. Duis quam mauris, venenatis id tortor non, tristique rutrum velit. Vivamus ac nisi malesuada, lobortis quam vel, aliquam ipsum. Fusce tincidunt ullamcorper mauris suscipit dictum. Maecenas blandit ultricies rutrum. Vestibulum ut massa id nulla euismod bibendum. Nam ac malesuada urna. Donec vulputate sapien non ullamcorper euismod. Fusce non pharetra dui. Phasellus sit amet commodo augue.</p><p>Fusce maximus faucibus est vel convallis. Vivamus ipsum leo, finibus a lacus a, vulputate ultricies felis. Vivamus sem ligula, fringilla eget convallis ut, lacinia ultricies massa. In sagittis ante a tincidunt posuere. Mauris fermentum posuere risus. Sed tortor dui, laoreet pulvinar ipsum vehicula, posuere hendrerit libero. Aliquam vitae justo et velit hendrerit imperdiet. Donec nunc lectus, rhoncus vitae nulla ac, lobortis ornare neque. Donec pellentesque enim est, at vulputate augue egestas at.</p><p>Praesent nisl nulla, hendrerit a elit non, mollis consectetur nulla. Suspendisse velit nunc, mattis nec mauris quis, posuere molestie lorem. In id tellus dapibus, dignissim justo et, pulvinar justo. In in mollis diam. Phasellus vel lacus ornare, facilisis libero sed, congue turpis. Cras eu pretium dui, eu malesuada nulla. Phasellus ac urna et est bibendum aliquet. Nullam rhoncus pretium nunc in lacinia.</p>"
	const h2s = div.querySelectorAll('h2');
	let sideMenu = '';
	for (let i = 0; i < h2s.length; i++) {
		const h2Text = h2s[i].innerHTML;
		const h2Id = h2Text.replace(/\W/g, '-');
		h2s[i].id = h2Id;
		sideMenu += "<li class='nav-item'><a class='nav-link' href='#"+h2Id+"'>"+h2Text+"</a></li>";
	}
	
    return (
	 <div className="row">
        <div className="col-2">
		<div className="pl-3">In this section<hr className="mt-0 mb-0"></hr></div><ul id="ulSideMenu" className="nav flex-column">
		{ReactHtmlParser(sideMenu)}
		</ul>
		</div>
        <div className="col-10">
			<main>
				<h1>{apiData.Article.title}</h1>
				{ReactHtmlParser(div.innerHTML)}
			</main>
		</div>
	</div>
    );
  }
}

export default Content;
