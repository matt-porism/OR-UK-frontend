import AnchorLink from 'react-anchor-link-smooth-scroll';

const SideMenu = ({ subMenu }) => {
	// don't render sidebar unless we have at least one section that has a title
	if (!subMenu || subMenu.length === 0 || (subMenu.length === 1 && !subMenu[0])) {
		return null;
	}

	return (
		//TO DO select the active sub menu item probably based off the URL passed to the API

		<>
			<aside className="sidebar flex-left">
				<h4 className="sidebar__heading">On this page</h4>
				<nav>
					<ul>
						{subMenu.map((menuItem, index) => {
							return (
								<li key={index}>
									<AnchorLink href={`#section-${index + 1}-heading`}>
										{menuItem}
									</AnchorLink>
								</li>
							)
						})}
					</ul>
				</nav>
			</aside>
		</>
	)
}


export default SideMenu;
