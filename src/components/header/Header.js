import { Link } from 'react-router-dom';

const Header = () => {

  return (
    <header className="header">
      <div className="parent">
        <a href="#0">Openreferral UK</a>
        <a href="#0" className="oruktools">
          Document &amp; Tools
        </a>
      </div>
    </header>
  );
}

export default Header;