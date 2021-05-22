import axios from 'axios';
import { Component } from 'react';

class Home extends Component {
    state = {input: "", videos: [] }
    
    handleSubmit = async(e) => {
        e.preventDefault();

        try {
            const { input } = this.state;
            const res = axios.get(`https://youtube.googleapis.com/youtube/v3/search?key=${process.env.REACT_APP_API_KEY }`)

            debugger
            this.setState({videos: res.data });
            
        }catch (err) {
            this.setState({videos: [] });
        }
        this.setState({input: ""});
    };

    handleChange = async (e) => {
        this.setState({input: e.target.value});
    };

    render() {
        const { input, videos } = this.state; 
        return(
           <section>
               <form onSubmit={this.handleSubmit}>
               <input type="text" value={input} onChange={this.handleChange} placeholder="Search..." />
               <button type="submit">Search</button>
              </form>

              <div>
                  <li>
                      {videos}
                  </li>
              </div>
           </section>
        )
    }
}

export default Home;