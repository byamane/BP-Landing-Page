import './About.css'

// Images
import Office from '../../assets/images/about-photo_1.jpg'
import AboutSH from '../../assets/images/about-photo_2.png'

const About = (props) => {
  return (
    <>
      <h1>MEET SAMANTHA</h1>
      <div id="about-container">
        <img 
          src={AboutSH}
          alt="Hero"
          id="hero-img"
        />
        <div id="about-blurb">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, maiores.
          </p>
        </div>
      </div>
      <div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, laboriosam distinctio sapiente voluptatem exercitationem nesciunt praesentium similique adipisci culpa officia ratione, quod mollitia iure sed quia illo vero neque vitae dolores tempore omnis. Ipsum nisi, saepe ea facere quod libero praesentium distinctio repellat, dolore rerum odit ad eveniet accusamus consectetur? 
          <br/>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam facere delectus dolore doloribus sunt tempora. Temporibus sint earum doloremque est!
        </p>
        <img 
          src={Office}
          alt="Life at the office of Samantha Hall"
          id="office-img"
        />
      </div>

    </>
  );
}

export default About;