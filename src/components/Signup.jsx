import "./Signup.css"

const Signup = ({
  form,
  setForm,
  handleChange,
  handleSubmit
}) => {
  return (
    <>
      <h2>STAY IN TOUCH WITH SAMANTHA</h2>
        
      <form onSubmit={handleSubmit}>
        <section id="signup-section">  
        <label htmlFor="add-email"></label>
        <input 
          name="email" 
          id="add-email" 
          placeholder="Email" 
          onChange={handleChange}
          maxLength={100}
          required
          value={form.name ? form.name : ''}  
        />
        <label htmlFor="add-email"></label>
        <input 
          name="phone" 
          id="add-phone" 
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
    </>
  );
}
 
export default Signup;