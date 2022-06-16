import './About.css'

// Images
import Office from '../../assets/images/about-photo_1.jpg'
import AboutSH from '../../assets/images/about-photo_2.png'

const About = (props) => {
  return (
    <div id="about-section">
      <h1 id="about-header">MEET SAMANTHA</h1>

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

      <div id="office-container">
        <div id="office-blurb">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi dolorem alias officiis esse dolorum maiores quos magnam modi amet obcaecati ipsum dicta, omnis doloremque est provident accusantium laudantium iure optio, fuga ipsam, natus aspernatur culpa? Quasi similique quibusdam accusamus sequi magnam molestiae. Ipsum repellendus, exercitationem, iste saepe voluptas ducimus pariatur hic at, cumque veritatis quaerat consequatur nemo praesentium voluptatibus deserunt? Eum quos repudiandae animi distinctio optio reiciendis soluta aliquid quae, mollitia repellat, iusto ullam omnis totam doloremque rem ea autem.
          <br/>
          <br/>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab numquam, perferendis praesentium neque perspiciatis deleniti asperiores placeat quos nostrum vitae quasi facere assumenda vel suscipit! Perferendis laboriosam architecto, odit, aperiam, accusamus rem cupiditate nesciunt dicta harum a consectetur cumque deleniti!
        </div>
        <img 
          src={Office}
          alt="Life at the office of Samantha Hall"
          id="office-img"
        />
      </div>

    </div>
  );
}

export default About;