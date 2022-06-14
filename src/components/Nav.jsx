
// Icons
import Facebook from '../assets/social-icons/Facebook.png'
import Instagram from '../assets/social-icons/IG.png'
import Twitter from '../assets/social-icons/Twitter.png'

const Nav = (props) => {
  return (
    <nav>
      <ul className='nav-bar'>
        <li className="logo"></li>
        <li>
          <a href="/">
            <img 
              src={Facebook} 
              alt="Samantha Hall's Facebook" 
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img 
              src={Instagram} 
              alt="Samantha Hall's Instagram" 
            />
          </a>
        </li>
        <li>
          <a href="/">
            <img 
              src={Twitter} 
              alt="Samantha Hall's Twitter" 
            />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;