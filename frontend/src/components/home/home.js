import headshot from '../../assets/headshot.jpg';
import "./home.css";

const Home = () => {
  return (
    <div className="Home">
      <h1 className='swe'>Software Developer </h1>
      <h1><span className="pink-text">& Product Manager</span>
      </h1>
      <img
        src={headshot}
        alt="kittyliu"
        style={{
          padding: '20px',
          width: '150px',
          height: '150px',
          borderRadius: '50%',
          objectFit: 'cover',
        }}
      />
      <h2>
        Hello! I'm <a href="https://en.wikipedia.org/wiki/Hello_Kitty" className="kitty" target="_blank">Kitty</a>. 
        I've always been interested in the dynamic intersection between <a href="/tech" className="kitty" target="_blank">technology</a>, <a href="/fun" className="kitty">creativity</a>, and <span className="kitty">people</span>, which ultimately led me to <span className="kitty">product management</span>. 
        Here, you'll find stories about my <span className="kitty">journey in tech</span>, my <span className="kitty">hobbies</span>, and <span className="kitty">places i've traveled</span>. Happy exploring!
      </h2>
    </div>
  );
};

export default Home;
