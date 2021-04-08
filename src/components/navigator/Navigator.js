import { Link } from 'react-router-dom';

const Navigator = ({mainMenu, topMenuId}) => {
  const menuItems = mainMenu.map(function (name, index) {
    let cssClass = 'nav-item';

    // apply active class if we are on the current
    if (mainMenu[index] != null && mainMenu[index].id === topMenuId) {
      cssClass += ' active';
    }

    return (
      <li className={cssClass} key={mainMenu[index].link}>
        <Link className="nav-link" to={mainMenu[index].link}>
          {mainMenu[index].label}
        </Link>
      </li>
    );
  })

  return (
  
        <nav className="nav">
            <ul>
                {menuItems}
            </ul>
        </nav>     
    
  
  );
}

export default Navigator;