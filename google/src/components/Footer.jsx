import neutral from '../img/neutral.png';
const Footer = () => {
  return (
    <footer className="footer">
      <p>Nigeria</p>
      <div className="footer-box">
        <div className="footer-1">
          <a href="#">About</a>
          <a href="#">Advertising</a>
          <a href="#">Business</a>
          <a href="#">How Research Works </a>
        </div>
        <div className="footer-2">
          <img
            src={neutral}
            alt="Icon"
            style={{ height: '14px', width: '14px' }}
          />
          <a href="#">Carbon neutral since 2007</a>
        </div>
        <div className="footer-3">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
          <a href="#">Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
