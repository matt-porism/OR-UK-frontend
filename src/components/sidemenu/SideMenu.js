const SideMenu = ({ subMenu }) => {
	if (!subMenu || subMenu.length === 0) {
		return;
	}

	return (
		//TO DO select the active sub menu item probably based off the URL passed to the API

		<div className="col-2">
			<div className="pl-3">
				In this section
					<hr className="mt-0 mb-0"></hr>
			</div>
			<ul className="nav flex-column">
				{subMenu.map(function (name, index) {
					return (
						<li className="nav-item" key={subMenu[index].Link}>
							<a className="nav-link" href={subMenu[index].Link}>
								{subMenu[index].Label}
							</a>
						</li>
					)
				})}
			</ul>
		</div>
	)
}


export default SideMenu;
