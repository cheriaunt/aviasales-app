import Logo from './Logo.svg';
import classes from './header.module.scss';

const Header = () => {
  return <img className={classes.logotype} src={Logo} alt='logotype' />;
};

export default Header;
