// Images
import Hero from '../assets/images/hero.png'
import Logo from '../assets/images/SH-Logo.png'

// Components
import Signup from './Signup';

const Header = ({
  form,
  setForm,
  handleChange,
  handleSubmit
}) => {
  return (
    <>
      <div id="header-background">
        <img src={Hero} alt="Samantha Hall with cityscape background" />
      </div>
      <div id="signup-container">
        <img src={Logo} alt="Samantha Hall - Democrat for Senate" />
        <Signup 
          form={form}
          setForm={setForm}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
 
export default Header;