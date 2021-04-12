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
	
    return (
	 <div className="row">
        <div className="col-2">
		<div className="pl-3">In this section<hr className="mt-0 mb-0"></hr></div><ul id="ulSideMenu" className="nav flex-column">
			{apiData.article.sections.map(d => {
					if (d.sectionHeading){
						return (<li key={d.id}><a key={d.id} href={"#" + d.id}>{d.sectionHeading}</a></li>)
					}
					return (<></>)})}
		</ul>
		</div>
        <div className="col-10">
			<main>
				<h1>{apiData.article.title}</h1>
					{apiData.article.sections.map(d => {
					if (d.sectionHeading){
						return (<div key={d.id}><h2 id={d.id}>{d.sectionHeading}</h2><div>{ReactHtmlParser(d.sectionBody)}</div></div>)
					}
					return (<div key={d.id}>{ReactHtmlParser(d.sectionBody)}</div>)})}
			</main>
		</div>
	</div>
    );
  }
}

export default Content;
