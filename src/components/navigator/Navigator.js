import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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
  
        <nav className="global-nav">
          <a href="/developers" className="button-header">
            For developers
          </a>
          <ul>
              {menuItems}
          </ul>
        </nav>     
    
  
  );
}
Navigator.propTypes = {
  mainMenu: PropTypes.array.isRequired,
  topMenuId: PropTypes.string.isRequired
}

export default Navigator;