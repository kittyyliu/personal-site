import headshot from '../../assets/headshot.jpg';

const Home = () => {
    return ( 
        <div className="Home">
            <h2>software + </h2>
            <h2>software + </h2> 
            <img src={headshot} alt="kittyliu" 
            style={{ width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover' }}
            />
        </div>
    );
}
export default Home;