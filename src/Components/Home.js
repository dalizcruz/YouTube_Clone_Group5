import axios from "axios";
import { Link } from "react-router-dom";
import {useState} from "react"
require("dotenv").config();

const Home = () => {
  const [input, setInput] = useState("");
  const [videos, setVideos] = useState([]);
  const [showThumbnails, setShowThumbnails] = useState(false);

  const fetchVideos = async () => {
    try {
      const res = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=${process.env.REACT_APP_API_KEY}&type=video&q=${input}`);
      setVideos(res.data.items);
    } catch (err) {
      setVideos([]);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetchVideos();
    setShowThumbnails(true)
    setInput("")
  };

   const handleChange = (e) => {
    setInput(e.target.value)
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          placeholder="Search..."
        />
        <button type="submit">Search</button>
      </form>

      
        {showThumbnails ? (
        <ul>
          {videos.map((item) => {
                return <li key={item.id.videoId}> <img alt="thumbnails" src={item.snippet.thumbnails.default.url} /> <Link to={`/video/${item.id.videoId}`}>{item.snippet.title}</Link> </li>
          })}
        </ul> )
        
        :<ul></ul> }
      
    </section>
  );
};

export default Home;
