import './Footer.css'

// Images
import Logo from '../../assets/images/SH-Logo.png'

const Footer = (props) => {
  return (
    <div id="footer">
      <div id='footer-logo-container'>
        <img 
          src={Logo} 
          alt="Samantha Hall - Democrat for Senate"
          id="footer-logo"
        />
      </div>
      <div id='disclaimer-copyright-container'>
        <div id="footer-message">
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <div id="privacy">
          <a href="/">
            Privacy Policy
          </a>
          ©2021
        </div>
      </div>
    </div>
  );
}

export default Footer;