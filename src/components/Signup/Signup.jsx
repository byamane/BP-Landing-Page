import "./Signup.css"

const Signup = ({
  form,
  setForm,
  handleChange,
  handleSubmit
}) => {
  return (
    <div id="signup-form">
      <h1 id="signup-h1">STAY IN TOUCH WITH SAMANTHA</h1>
        
      <form onSubmit={handleSubmit}>
        <section id="signup-section">  
          <label htmlFor="add-email"></label>
          <input 
            name="email" 
            id="add-email"
            className="inputs"
            placeholder="Email" 
            onChange={handleChange}
            maxLength={100}
            required
            value={form.email ? form.email : ''}  
          />
          <label htmlFor="add-email"></label>
          <input 
            name="phone" 
            id="add-phone"
            className="inputs" 
            placeholder="Phone" 
            onChange={handleChange}
            minLength={10}
            maxLength={10}
            required
            value={form.phone ? form.phone : ''}  
          />
          <label htmlFor="add-zip"></label>
          <input 
            name="zip" 
            id="add-zip"
            className="inputs" 
            placeholder="ZIP" 
            onChange={handleChange}
            minLength={5}
            maxLength={5}
            required
            value={form.zip ? form.zip : ''}  
          />

        <div id="submit-info-btn-container">
          <button
            type="submit"
            id="submit-info-btn"
          >
            SIGN UP
          </button>
        </div>
        
        </section>
      </form>
    </div>
  );
}
 
export default Signup;