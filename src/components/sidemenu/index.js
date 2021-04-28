import AnchorLink from 'react-anchor-link-smooth-scroll';

const SideMenu = ({ subMenu }) => {
	if (!subMenu || subMenu.length === 0) {
		return null;
	}

	return (
		//TO DO select the active sub menu item probably based off the URL passed to the API

		<>
			<div className="sidebar flexitem flexleft">
				<h4 className="sidebar__heading">On this page</h4>
				<ul>
					{subMenu.map( (menuItem, index) => {
						return (
							<li key={index}>
								<AnchorLink href={`#section-${index+1}-heading`}>
									{menuItem}
								</AnchorLink>
							</li>
						)
					})}
				</ul>
			</div>
		</>
	)
}


export default SideMenu;
