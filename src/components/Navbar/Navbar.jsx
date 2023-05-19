import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="left">
        <div>Piyush</div>
        <span>toggle</span>
      </div>
      <div className="right">
        <div>
          <ul>
            <li data-replace='Home'>Home</li>
            <li data-replace='Services'>Services</li>
            <li data-replace='Projects'>Projects</li>
            <li data-replace='Testimonials'>Testimonials</li>
          </ul>
        </div>

        <a href="#" className="cta">
          <span>Contact me</span>
          <svg width="13px" height="10px" viewBox="0 0 13 10">
            <path d="M1,5 L11,5"></path>
            <polyline points="8 1 12 5 8 9"></polyline>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
