import './Header.css'

// Images
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
        <div id="signup-container">
          <img 
            src={Logo} 
            alt="Samantha Hall - Democrat for Senate"
            id="signup-logo"
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