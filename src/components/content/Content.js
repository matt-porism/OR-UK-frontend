import ReactHtmlParser from 'react-html-parser'; 

function Content({homePageProps}) {
	if (!homePageProps || !homePageProps.article){
		return (<div></div>);
	}

	let nextLink = (<></>);
	if (homePageProps.article.ReadNextLink){
		nextLink = <><hr/><div className="NextLink"><a href={homePageProps.article.ReadNextLink.url}>{homePageProps.article.ReadNextLink.TextToDisplay}</a></div></>
	}
						
    return (
		<main className="main">
	 <div className="row">
        <div className="col-2">
		<div className="pl-3">In this section<hr className="mt-0 mb-0"></hr></div><ul id="ulSideMenu" className="nav flex-column">
			{homePageProps.article.sections.map(d => {
					if (d.sectionHeading){
						return (<li key={d.id}><a key={d.id} href={"#" + d.id}>{d.sectionHeading}</a></li>)
					}
					return (<></>)})}
		</ul>
		</div>
        <div className="col-10">			
				<h1>{homePageProps.article.title}</h1>
					{homePageProps.article.sections.map(d => {
					if (d.sectionHeading){
						return (<div key={d.id}><h2 id={d.id}>{d.sectionHeading}</h2><div>{ReactHtmlParser(d.sectionBody)}</div></div>)
					}
					return (<div key={d.id}>{ReactHtmlParser(d.sectionBody)}</div>)})}					
					{nextLink}
		</div>
	</div></main>
    );
}

export default Content;
