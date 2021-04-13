const SideMenu = ({ subMenu }) => {
	if (!subMenu || subMenu.length === 0) {
		return;
	}

	return (
		//TO DO select the active sub menu item probably based off the URL passed to the API

		<>
			<div className="sidebar flexitem flexleft">
				In this section
					<hr />
			
			<ul>
				{subMenu.map(function (name, index) {
					return (
						<li key={subMenu[index].Link}>
							<a href={subMenu[index].Link}>
								{subMenu[index].Label}
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
