import './Nav.css'

// Images
import Logo from '../../assets/images/SH-Logo.png'

// Icons
import Facebook from '../../assets/social-icons/Facebook.png'
import Instagram from '../../assets/social-icons/IG.png'
import Twitter from '../../assets/social-icons/Twitter.png'

const Nav = (props) => {
  return (
    <>
      <header id='nav-bar'>
        <div>
              <img 
                id="nav-logo"
                src={Logo} 
                alt="Samantha Hall - Democrat for Senate"
              />
        </div>
        <nav id='nav-bar-container'>
          <ul className='nav-bar-links'>
            <li>
              <button id="volunteer-btn">VOLUNTEER</button>
            </li>
            <li>
              <button id='donate-btn'>DONATE</button>
            </li>
            <li>
              <a href="/">
                <img 
                  src={Facebook} 
                  alt="Samantha Hall's Facebook"
                  className='social-icons'
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img 
                  src={Instagram} 
                  alt="Samantha Hall's Instagram"
                  className='social-icons' 
                />
              </a>
            </li>
            <li>
              <a href="/">
                <img 
                  src={Twitter} 
                  alt="Samantha Hall's Twitter"
                  className='social-icons' 
                />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Nav;