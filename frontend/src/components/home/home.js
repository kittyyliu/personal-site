import headshot from '../../assets/headshot.jpg';


const Home = () => {
  return (
    <div className="Home">
      <h1>software developer </h1>
      <h1><span className="pink-text">& product manager</span>
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
        hello! i'm <a href="https://en.wikipedia.org/wiki/Hello_Kitty" className="kitty" target="_blank">kitty</a>. 
        i've always been interested in the dynamic intersection between <a href="/tech" className="kitty">technology</a>, <a href="/fun" className="kitty">creativity</a>, and <span className="kitty">people</span>, which ultimately led me to <span className="kitty">product management</span>. 
        here, you'll find stories about my <span className="kitty">journey in tech</span>, my <span className="kitty">hobbies</span>, and <span className="kitty">places i've traveled</span>. happy exploring!
      </h2>
    </div>
  );
};

export default Home;
