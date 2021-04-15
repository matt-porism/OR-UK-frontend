const SideMenu = ({ subMenu }) => {
	if (!subMenu || subMenu.length === 0) {
		return null;
	}

	return (
		//TO DO select the active sub menu item probably based off the URL passed to the API

		<>
			<div className="sidebar flexitem flexleft">
				In this section
					<hr />
			
			<ul>
				{subMenu.map( (menuItem, index) => {
					return (
						<li key={index}>
							<a href="/#">
								{menuItem}
							</a>
						</li>
					)
				})}
			</ul>
			</div>
		</>
	)
}


export default SideMenu;
