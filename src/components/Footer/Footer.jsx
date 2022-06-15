import './Footer.css'

// Images
import Logo from '../../assets/images/SH-Logo.png'

const Footer = (props) => {
  return (
    <>
      <div id='footer-logo-container'>
        <img src={Logo} alt="Samantha Hall - Democrat for Senate" />
      </div>
      <div id='disclaimer-copyright-container'>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit
        </div>
        <a href="/">
          Privacy Policy
        </a>
        <br />
        ©2021
      </div>
    </>
  );
}

export default Footer;