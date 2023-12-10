import "./Navbar.scss";


const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <img className="logo" src="./logo.gif" alt="" />
      </div>
      <div className="links">
        <a href="#">Personality Test</a>
        <a href="#">Personality Types</a>
        <a href="#">Specialized Tests</a>
        <a href="#">Log In</a>
        <a href="#">CONTACT</a>
      </div>
    </nav>
  );
};

export default Navbar;
