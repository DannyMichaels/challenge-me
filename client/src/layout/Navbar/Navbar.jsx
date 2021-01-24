import { Link } from 'react-router-dom';
import { useStateValue } from '../../providers/CurrentUserProvider';
import { useHistory, useLocation } from 'react-router-dom';
import { removeToken } from '../../services/auth';
import Button from '@material-ui/core/Button';
import logo from './logo.png';
import Nav from './styledNavbar';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Navbar() {
  const [{ currentUser }, dispatch] = useStateValue();

  const history = useHistory();
  const handleLogout = () => {
    dispatch({ type: 'REMOVE_USER' });
    localStorage.removeItem('authToken');
    removeToken();
    history.push('/');
  };

  const { pathname } = useLocation();

  return (
    <Nav className="navbar">
      <ul className="links">
        <li className={`nav-block ${pathname.match(/^\/$/) ? 'active' : ''}`}>
          <Link className="logo " to="/">
            <img style={{ width: '4rem', height: '3rem' }} src={logo} alt="logo" />
          </Link>
        </li>
        <li className={`nav-block ${pathname.includes('/create-contest') ? 'active' : ''}`}>
          <Link to="/create-contest">Create Contest</Link>
        </li>
        <li className={`nav-block ${pathname.includes('/about') ? 'active' : ''}`}>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <div className="user-column">
        <div className="user-info">
          {currentUser && (
            <Link className="profile-link" to={`/users/${currentUser?.id}`}>
              {!currentUser?.image ? (
                <AccountCircleIcon className="account-circle-icon" />
              ) : (
                <img className="user-image" src={currentUser.image} alt={currentUser?.name} />
              )}
              <div className="name">{currentUser?.first_name}</div>
            </Link>
          )}
        </div>
        <div className="auth-buttons">
          {currentUser && (
            <Button color="secondary" variant="contained" onClick={handleLogout}>
              Log Out
            </Button>
          )}
          {!currentUser && (
            <Button variant="contained" component={Link} to="/login">
              Log In
            </Button>
          )}
          {!currentUser && (
            <Button variant="contained" component={Link} to="/register">
              Register
            </Button>
          )}
        </div>
      </div>
    </Nav>
  );
}

export default Navbar;
