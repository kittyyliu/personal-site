import headshot from '../../assets/headshot.jpg';

const Home = () => {
  return (
    <div className="Home">
      <h1>
        software <span className="pink-text">& product</span>
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
        hello! i'm <span className="kitty">kitty</span>. i've always been interested in the dynamic intersection between
        technology, creativity, and people, which ultimately led me to product management. here, you'll find stories about
        my journey in tech, my hobbies, and places i've traveled.
      </h2>
    </div>
  );
};

export default Home;
