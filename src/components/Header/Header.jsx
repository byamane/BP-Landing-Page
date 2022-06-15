import './Header.css'

// Images
import Hero from '../../assets/images/hero.png'
import Logo from '../../assets/images/SH-Logo.png'

// Components
import Signup from '../Signup/Signup';

const Header = ({
  form,
  setForm,
  handleChange,
  handleSubmit
}) => {
  return (
    <>
      <section id="header">
        <div id="header-background">
          <img 
            src={Hero} 
            alt="Samantha Hall with cityscape background"
            id="header-bg-img" 
          />
        </div>
        <div id="signup-container">
          <img 
            src={Logo} 
            alt="Samantha Hall - Democrat for Senate" 
          />
          <Signup 
            form={form}
            setForm={setForm}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
      </section>
    </>
  );
}
 
export default Header;